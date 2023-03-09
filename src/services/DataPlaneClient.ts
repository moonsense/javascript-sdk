import { ClientConfig } from '../ClientConfig';
import { common, dataplane } from '../models/generated/protos';
import { ApiClient } from './ApiClient';

export class DataPlaneClient extends ApiClient {
    private version = '/v2';

    constructor(
        config: ClientConfig,
    ) {
        super(
            `${config.protocol}://${config.defaultRegion}.data-api.${config.rootDomain}`, 
            config.secretToken,
        );
    }

    public async whoAmI(): Promise<common.TokenSelfResponse> {
        return this.get(this.version + '/tokens/self')
            .then(resp => this.processResponse(resp))
            .then(data => common.TokenSelfResponse.decode(new Uint8Array(data))
        );
    }
}