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