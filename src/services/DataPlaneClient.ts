import { ClientConfig } from '../ClientConfig';
import { common, dataplane } from '../models/generated/protos';
import { ListSessionConfig } from '../models/ListSessionConfig';
import { ApiClient } from './ApiClient';

/**
 * The maximum number of sessions that can be returned per page.
 */
export const MAX_SESSIONS_PER_PAGE = 100;

export class DataPlaneClient extends ApiClient {
    private version = '/v2';

    constructor(
        baseConfig: ClientConfig,
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
            .then(data => common.TokenSelfResponse.decode(new Uint8Array(data))
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
}
