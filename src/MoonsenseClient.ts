// Copyright 2023 Moonsense, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MoonsenseClientConfig } from './MoonsenseClientConfig';
import { bundle, common, controlplane, dataplane } from './models/generated/protos';
import { ListSessionConfig } from './models/ListSessionConfig';
import { PaginatedSessionList } from './models/PaginatedSessionList';
import { ControlPlaneClient } from './services/ControlPlaneClient';
import { DataPlaneClient } from './services/DataPlaneClient';
import { ListJourneyConfig } from './models/ListJourneyConfig';
import { PaginatedJourneyList } from './models/PaginatedJourneyList';

/**
 * A client for the MoonSense API. This client can be created
 * by passing a {@link MoonsenseClientConfig} to the constructor.
 * 
 * @example
 * ```typescript
 * import { Client } from '@moonsense/moonsense-api-client';
 * 
 * const client = new Client({secretToken: 'my-secret-token'});
 * ```
 */
export class MoonsenseClient {
    public static readonly DEFAULT_ROOT_DOMAIN = 'moonsense.cloud';
    public static readonly DEFAULT_PROTOCOL = 'https';
    public static readonly DEFAULT_REGION = 'us-central1.gcp';

    private config: MoonsenseClientConfig;
    private controlPlaneClient: ControlPlaneClient;
    private dataPlaneClients: Map<string, DataPlaneClient> = new Map();

    private static mergeConfigs(config: MoonsenseClientConfig): MoonsenseClientConfig {
        const mergedConfig: MoonsenseClientConfig = {
            secretToken: config.secretToken || process.env.MOONSENSE_SECRET_TOKEN || '',
            rootDomain: config.rootDomain || process.env.MOONSENSE_ROOT_DOMAIN || MoonsenseClient.DEFAULT_ROOT_DOMAIN,
            protocol: config.protocol || process.env.MOONSENSE_PROTOCOL || MoonsenseClient.DEFAULT_PROTOCOL,
            defaultRegion: config.defaultRegion || process.env.MOONSENSE_DEFAULT_REGION || MoonsenseClient.DEFAULT_REGION,
        }

        return mergedConfig;
    }

    constructor(
        /**
         * The configuration to use to setup the client. If not provided, 
         * the client will attempt to read the configuration from the environment.
         */
        config?: MoonsenseClientConfig,
    ) {

        // Combine the passed config with the environment config and defaults
        config = MoonsenseClient.mergeConfigs(config || {} as MoonsenseClientConfig);

        // Validate the config
        if (!config.secretToken || config.secretToken.length <= 0) {
            throw new Error('secretToken must be provided in config');
        }

        this.config = config;

        // Create the control plane client
        this.controlPlaneClient = new ControlPlaneClient(this.config);

        // Create the data plane client for the default region
        this.dataPlaneClients.set(this.config.defaultRegion!, new DataPlaneClient(this.config, this.config.defaultRegion!));
    }

    /**
     * Gets the data plane client for the specified region
     */
    private getDataRegionClient(region: string): DataPlaneClient {
        if (!this.dataPlaneClients.has(region)) {
            this.dataPlaneClients.set(region, new DataPlaneClient(this.config, region));
        }

        return this.dataPlaneClients.get(region)!;
    }

    /**
     * Determines the region to use for a given session.
     * 
     * If a region is provided, it will be used. Otherwise, the region
     * will be determined by a call to describe the session first.
     */
    private async findDataRegion(sessionId: string, region?: string): Promise<DataPlaneClient> {
        if (region) {
            return this.getDataRegionClient(region);
        }

        const session = await this.describeSession(sessionId, true);

        if (!session.regionId) {
            throw new Error(`Session ${sessionId} does not have a regionId`);
        }

        return this.getDataRegionClient(session.regionId);
    }

    /**
     * Describes the authentication token used to connect to the API
     */
    public whoAmI(): Promise<common.TokenSelfResponse> {
        return this.getDataRegionClient(this.config.defaultRegion!).whoAmI();
    }

    /**
     * Retrieves the list of Data Plane regions in the Moonsense Cloud.
     * 
     * These regions are used for data ingest and storage. Data is encrypted while at-rest
     * and in-transit. Granular data never leaves a region.
     * 
     * See: https://api.moonsense.cloud/v2/regions
     */
    public listRegions(): Promise<controlplane.IDataPlaneRegion[]> {
        return this.controlPlaneClient
            .listRegions()
            .then(resp => resp.regions);

    }

    /**
     * ListJourneys lists the journeys for the app associated with 
     * the provided secret token.
     * 
     * @param config The configuration to use when listing journeys
     */
    public listJourneys(config?: ListJourneyConfig): Promise<PaginatedJourneyList> {
        const dataPlaneClient = this.getDataRegionClient(this.config.defaultRegion!);
        return dataPlaneClient
            .listJourneys(config || {})
            .then(resp => new PaginatedJourneyList(
                dataPlaneClient,
                config || {},
                resp,
                )
            );
    }

    /**
     * Fetches the details of a journey with the specified journeyId.
     * The journey response includes the list of sessions associated with the journey.
     * 
     * @param sessionId The ID of the journey to fetch
     */
    public describeJourney(journeyId: string): Promise<dataplane.IJourneyDetailResponse> {
        return this.getDataRegionClient(this.config.defaultRegion!).describeJourney(journeyId);
    }

    /**
     * ListSessions lists the sessions for the app associated with 
     * the provided secret token.
     * 
     * @param config The configuration to use when listing sessions
     */
    public listSessions(config?: ListSessionConfig): Promise<PaginatedSessionList> {
        const dataPlaneClient = this.getDataRegionClient(this.config.defaultRegion!);
        return dataPlaneClient
            .listSessions(config || {})
            .then(resp => new PaginatedSessionList(
                dataPlaneClient,
                config || {},
                resp,
                )
            );
    }

    /**
     * Fetches the details of a session with the specified sessionId.
     * 
     * @param sessionId The ID of the session to fetch
     * @param minimal If true, only the session metadata will be returned. If false, the full session will be returned.
     */
    public describeSession(sessionId: string, minimal = false): Promise<dataplane.ISession> {
        return this.getDataRegionClient(this.config.defaultRegion!).describeSession(sessionId, minimal);
    }

    /**
     * Gets the list of features for the specified session.
     * 
     * @param sessionId The ID of the session to fetch features for
     * @param region The region to fetch the session from. If not provided, a describe call will be made
     * to determine the correct region. 
     */
    public async listSessionFeatures(sessionId: string, region?: string): Promise<dataplane.ISessionFeaturesResponse> {
        const dataPlaneClient = await this.findDataRegion(sessionId, region);
        return dataPlaneClient.listSessionFeatures(sessionId);
    }

    /**
     * Gets a list of signals for the specified session.
     * 
     * @param sessionId The ID of the session to fetch signals for
     * @param region The region to fetch the session from. If not provided, a describe call will be made
     * to determine the correct region. 
     */
    public async listSessionSignals(sessionId: string, region?: string): Promise<dataplane.ISignalsResponse> {
        const dataPlaneClient = await this.findDataRegion(sessionId, region);
        return dataPlaneClient.listSessionSignals(sessionId);
    }
    
    /**
     * Reads all the bundle data for the specified Session that were collected so far.
     * 
     * @param sessionId The ID of the session to fetch bundles for
     * @param region The region to fetch the session from. If not provided, a describe call will be made
     * to determine the correct region.
     */
    public async readSession(sessionId: string, region?: string): Promise<bundle.ISealedBundle[]> {
        const dataPlaneClient = await this.findDataRegion(sessionId, region);
        return dataPlaneClient.readSession(sessionId);
    }

    /**
     * Replaces the labels for the specified session.
     * 
     * @param sessionId The ID of the session to update
     * @param labels The labels to set on the session
     * @returns 
     */
    public updateSessionLabels(sessionId: string, labels: string[]): Promise<void> {
        return this.getDataRegionClient(this.config.defaultRegion!).updateSessionLabels(sessionId, labels);
    }
}

export default MoonsenseClient;