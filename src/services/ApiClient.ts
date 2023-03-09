import fetch, {
    Headers,
    Request,
    HeadersInit,
    Response,
    RequestInit,
} from 'node-fetch';

// if (!globalThis.fetch) {
//     globalThis.fetch = fetch;
//     globalThis.Headers = Headers;
//     globalThis.Request = Request;
//     globalThis.Response = Response;
//     globalThis.RequestInit = RequestInit;
// }

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
            throw new Error('request failed');
        }

        return resp.arrayBuffer();
    }

    public get(url: string): Promise<Response> {
        const useUrl = this.buildUrl(url);
        const useOptions = this.getOptions('GET');

        return fetch(useUrl, useOptions);
    }
}