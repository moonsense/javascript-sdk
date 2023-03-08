import { Client } from '../src/Client';
import { ClientConfig } from '../src/ClientConfig';

describe('Client', () => {
    it('should throw an error if no secret token is provided', () => {
        expect(() => {
            new Client({} as unknown as ClientConfig);
        }).toThrow('secretToken must be provided in config');
    });

    it('should use the default config values when not provided', () => {
        const client = new Client({secretToken: 'test'});
        expect(client['config'].rootDomain).toEqual(Client.DEFAULT_ROOT_DOMAIN);
        expect(client['config'].protocol).toEqual(Client.DEFAULT_PROTOCOL);
        expect(client['config'].defaultRegion).toEqual(Client.DEFAULT_REGION);
    });
});