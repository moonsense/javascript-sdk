import { decompressSync } from 'fflate';
import { MoonsenseClientConfig } from '../MoonsenseClientConfig';
import { bundle, common, dataplane } from '../models/generated/protos';
import { ListSessionConfig } from '../models/ListSessionConfig';
import { ApiClient } from './ApiClient';
import { Readable} from 'stream';

// import tar from 'tar';
import tar from 'tar-stream';

/**
 * The maximum number of sessions that can be returned per page.
 */
export const MAX_SESSIONS_PER_PAGE = 100;

export class DataPlaneClient extends ApiClient {
    private version = '/v2';

    constructor(
        baseConfig: MoonsenseClientConfig,
        region: string,
    ) {
        super(
            `${baseConfig.protocol}://${region}.data-api.${baseConfig.rootDomain}`, 
            baseConfig.secretToken,
        );
    }

    public whoAmI(): Promise<common.TokenSelfResponse> {
        return this.get(this.version + '/tokens/self')
            .then(resp => this.processResponse(resp))
            .then(data => {
                const body = new Uint8Array(data);
                return common.TokenSelfResponse.decode(body);
            }
        );
    }

    public listSessions(config: ListSessionConfig): Promise<dataplane.SessionListResponse> {
        const params = new URLSearchParams();
        
        // Append sessions per page if specified
        let sessionsPerPage = config.sessionsPerPage;
        if (sessionsPerPage && sessionsPerPage > 0) {
            if (sessionsPerPage > MAX_SESSIONS_PER_PAGE) {
                sessionsPerPage = MAX_SESSIONS_PER_PAGE;
            }
            params.append('per_page', sessionsPerPage.toString());
        }

        if (config.labels && config.labels.length > 0) {
            config.labels.forEach(label => params.append('filter[labels][]', label));
        }

        if (config.journeyId) {
            params.append('filter[journey_id]', config.journeyId);
        }

        if (config.platforms && config.platforms.length > 0) {
            config.platforms.forEach(platform => params.append('filter[platforms][]', common.DevicePlatform[platform].toString()));
        }

        if (config.since) {
            params.append('filter[min_created_at]', config.since.toISOString());
        }

        if (config.until) {
            params.append('filter[max_created_at]', config.until.toISOString());
        }

        return this.get(this.version + '/sessions?' + params.toString())
            .then(resp => this.processResponse(resp))
            .then(data => dataplane.SessionListResponse.decode(new Uint8Array(data))
        );
    }
    

    public describeSession(sessionId: string, minimal = false): Promise<dataplane.Session> {
        let view = 'full';
        if (minimal) {
            view = 'minimal';
        }

        return this.get(this.version + `/sessions/${sessionId}?view=${view}`)
            .then(resp => this.processResponse(resp))
            .then(data => dataplane.Session.decode(new Uint8Array(data))
        );
    }

    public listSessionFeatures(sessionId: string): Promise<dataplane.FeatureListResponse> {
        return this.get(this.version + `/sessions/${sessionId}/features`)
            .then(resp => this.processResponse(resp))
            .then(data => dataplane.FeatureListResponse.decode(new Uint8Array(data))
        );
    }

    public listSessionSignals(sessionId: string): Promise<dataplane.SignalsResponse> {
        return this.get(this.version + `/sessions/${sessionId}/signals`)
            .then(resp => this.processResponse(resp))
            .then(data => dataplane.SignalsResponse.decode(new Uint8Array(data))
        );
    }

    public readSession(sessionId: string): Promise<bundle.ISealedBundle[]> {
        return this.get(this.version + `/sessions/${sessionId}/bundles`)
            .then(resp => this.processResponse(resp))
            .then(data => {
                return new Promise((resolve: (data: bundle.ISealedBundle[]) => void, reject) => {
                
                    // Unzip the data
                    const unzipped = decompressSync(new Uint8Array(data));

                    // Turn it into a stream for the tar library
                    const stream = new Readable({
                        read() {
                            this.push(unzipped);
                        }
                    });
                    
                    // Untar the files and parse them into bundles
                    let bundles: bundle.ISealedBundle[] = [];
                    stream.pipe(
                        tar.extract()
                            .on('entry', async (header, stream) => {
                                const chunks = [];
                                for await (const chunk of stream) {
                                    chunks.push(chunk);
                                }
                                const untarBundles = new TextDecoder()
                                                        .decode(Buffer.concat(chunks))
                                                        .trim()
                                                        .split('\n');
                                bundles = untarBundles.map(untarBundle => {                                    
                                    return new bundle.SealedBundle(JSON.parse(untarBundle))
                                });

                                resolve(bundles);

                            })
                    ).on('error', (err) => {
                        reject(new Error(`failed to extract bundle tar.gz: ${err}`));
                    })
                });
            })
        ;
    }

    public updateSessionLabels(sessionId: string, labels: string[]): Promise<void> {
        const labelsProto = labels.map(label => new dataplane.SessionLabel({ name: label }));
        const labelsRequest = new dataplane.SessionLabelCreateRequest({ labels: labelsProto });

        const body = dataplane.SessionLabelCreateRequest.encode(labelsRequest).finish();

        return this.post(this.version + `/sessions/${sessionId}/labels`, body)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`request failed: ${resp.status} ${resp.statusText}`);
                }
            });
    }
}

