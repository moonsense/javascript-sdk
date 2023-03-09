import { ClientConfig } from './ClientConfig';
import { common } from './models/generated/protos';
import { DataPlaneClient } from './services/DataPlaneClient';

export class Client {
    public static readonly DEFAULT_ROOT_DOMAIN = 'moonsense.cloud';
    public static readonly DEFAULT_PROTOCOL = 'https';
    public static readonly DEFAULT_REGION = 'us-central1.gcp';

    private dataPlaneClient: DataPlaneClient;

    constructor(
        private config: ClientConfig,
    ) {

        // Validate the config
        if (!config.secretToken || config.secretToken.length <= 0){
            throw new Error('secretToken must be provided in config');
        }

        if (!config.rootDomain || config.rootDomain.length <= 0){
            this.config.rootDomain = Client.DEFAULT_ROOT_DOMAIN;
        }

        if (!config.protocol || config.protocol.length <= 0){
            this.config.protocol = Client.DEFAULT_PROTOCOL;
        }

        if (!config.defaultRegion || config.defaultRegion.length <= 0){
            this.config.defaultRegion = Client.DEFAULT_REGION;
        }

        this.dataPlaneClient = new DataPlaneClient(this.config);
    }

    public whoAmI(): Promise<common.TokenSelfResponse> {
        return this.dataPlaneClient.whoAmI();
    }
}

export default Client;