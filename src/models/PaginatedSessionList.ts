import { DataPlaneClient } from '../services/DataPlaneClient';
import { dataplane } from './generated/protos';
import { ListSessionConfig } from './ListSessionConfig';

export class PaginatedSessionList {
    private client: DataPlaneClient;
    private currentPageConfig: ListSessionConfig;
    private sessionList: dataplane.SessionListResponse;    

    constructor(
        client: DataPlaneClient, 
        config: ListSessionConfig,
        sessionList: dataplane.SessionListResponse,
    ) {
        this.client = client;
        this.currentPageConfig = JSON.parse(JSON.stringify(config)); // clone the config
        this.sessionList = sessionList;
    }

    public get sessions(): dataplane.ISession[] {
        return this.sessionList.sessions;
    }

    public get hasMoreSessions(): boolean {
        if (!this.sessionList || !this.sessionList.pagination) {
            return false;
        }

        return this.sessionList.pagination.nextPage !== 0;
    }

    public async nextPage(): Promise<PaginatedSessionList> {
        if (!this.hasMoreSessions) {
            throw new Error('No more sessions to fetch');
        }

        const lastSession = this.sessionList.sessions[this.sessionList.sessions.length - 1];

        if (!lastSession || !lastSession.createdAt) {
            throw new Error('Could not determine the last session creation date');
        }

        // Update the config to fetch the next page
        const nextPage = this.currentPageConfig;
        nextPage.until = new Date(
            (lastSession.createdAt.seconds || 0 )  * 1000 +
            (lastSession.createdAt.nanos || 0 ) / 1e6
        );

        // Fetch the next page
        const sessionList = await this.client.listSessions(nextPage);

        return new PaginatedSessionList(this.client, nextPage, sessionList);
    }
   
}