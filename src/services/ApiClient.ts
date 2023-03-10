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

import fetch, {
    HeadersInit,
    Response,
    RequestInit,
} from 'node-fetch';

export class ApiClient {

    constructor(
        protected baseUrl: string,
        protected authToken: string,
    ){}

    private buildUrl(relativePath: string): string {
        return this.baseUrl + relativePath;
    }

    private getOptions(method: string): RequestInit {
        const headers: HeadersInit = {
            'Authorization': `Bearer ${this.authToken}`,
            'Content-Type': 'application/x-protobuf',
            'Accept': 'application/x-protobuf',
        };

        return {
            headers,
            method,
        }
    }

    protected processResponse(resp: Response): Promise<ArrayBuffer>{
        if (!resp.ok) {
            throw new Error(`request failed: ${resp.status} ${resp.statusText}: ${resp.url}`);
        }

        return resp.arrayBuffer();
    }

    public get(url: string): Promise<Response> {
        const useUrl = this.buildUrl(url);
        const useOptions = this.getOptions('GET');

        return fetch(useUrl, useOptions);
    }

    public post(url: string, body: Uint8Array): Promise<Response> {
        const useUrl = this.buildUrl(url);
        const useOptions = this.getOptions('POST');
        useOptions.body = body;

        return fetch(useUrl, useOptions);
    }
}