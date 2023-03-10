import { MoonsenseClientConfig } from '../MoonsenseClientConfig';
import { controlplane } from '../models/generated/protos';
import { ApiClient } from './ApiClient';

export class ControlPlaneClient extends ApiClient{
    private version = '/v2';

    constructor(
        baseConfig: MoonsenseClientConfig,
    ) {
        super(
            `${baseConfig.protocol}://api.${baseConfig.rootDomain}`, 
            baseConfig.secretToken,
        );
    }

    public listRegions(): Promise<controlplane.DataRegionsListResponse> {
        return this.get(this.version + '/regions')
            .then(resp => this.processResponse(resp))
            .then(data => controlplane.DataRegionsListResponse.decode(new Uint8Array(data))
        );
    }
}