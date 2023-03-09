/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ClientConfig } from './ClientConfig';
import { common, controlplane, dataplane } from './models/generated/protos';
import { ListSessionConfig } from './models/ListSessionConfig';
import { PaginatedSessionList } from './models/PaginatedSessionList';
import { ControlPlaneClient } from './services/ControlPlaneClient';
import { DataPlaneClient } from './services/DataPlaneClient';

/**
 * A client for the MoonSense API. This client can be created
 * by passing a {@link ClientConfig} to the constructor.
 * 
 * @example
 * ```typescript
 * import { Client } from '@moonsense/moonsense-api-client';
 * 
 * const client = new Client({secretToken: 'my-secret-token'});
 * ```
 */
export class Client {
    public static readonly DEFAULT_ROOT_DOMAIN = 'moonsense.cloud';
    public static readonly DEFAULT_PROTOCOL = 'https';
    public static readonly DEFAULT_REGION = 'us-central1.gcp';

    private config: ClientConfig;
    private controlPlaneClient: ControlPlaneClient;
    private dataPlaneClients: Map<string, DataPlaneClient> = new Map();

    private static mergeConfigs(config: ClientConfig): ClientConfig {
        const mergedConfig: ClientConfig = {
            secretToken: config.secretToken || process.env.MOONSENSE_SECRET_TOKEN || '',
            rootDomain: config.rootDomain || process.env.MOONSENSE_ROOT_DOMAIN || Client.DEFAULT_ROOT_DOMAIN,
            protocol: config.protocol || process.env.MOONSENSE_PROTOCOL || Client.DEFAULT_PROTOCOL,
            defaultRegion: config.defaultRegion || process.env.MOONSENSE_DEFAULT_REGION || Client.DEFAULT_REGION,
        }

        return mergedConfig;
    }

    constructor(
        /**
         * The configuration to use to setup the client. If not provided, 
         * the client will attempt to read the configuration from the environment.
         */
        config?: ClientConfig,
    ) {

        // Combine the passed config with the environment config and defaults
        config = Client.mergeConfigs(config || {} as ClientConfig);

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
     * ListSessions lists the sessions for the app associated with 
     * the provided secret token.
     */
    public listSessions(config?: ListSessionConfig): Promise<PaginatedSessionList> {
        console.log('conf', config);
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

    public describeSession(sessionId: string): Promise<dataplane.ISession> {
        return this.getDataRegionClient(this.config.defaultRegion!).describeSession(sessionId);
    }

}

export default Client;