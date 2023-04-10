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


jest.mock('node-fetch', ()=>jest.fn())

import { MoonsenseClient, timestampFromDate } from '../src/MoonsenseClient';
import { MoonsenseClientConfig } from '../src/MoonsenseClientConfig';
import fetch, {
    Response,
} from 'node-fetch';
import { common, controlplane, dataplane, google, journey_feedback } from '../src/models/generated/protos';
import fs from 'fs';

describe('Client', () => {
    let mockFetch: jest.MockedFunction<typeof fetch>;

    beforeEach(() => {
        mockFetch = fetch as jest.MockedFunction<typeof fetch>;
        mockFetch.mockClear();
    });

    const mockRequest = (responseBody?: ArrayBufferLike, responseStatus = 200) => {

        mockFetch.mockResolvedValue({
            ok: responseStatus >= 200 && responseStatus < 300,
            status: responseStatus,
            arrayBuffer: () => {
                return Promise.resolve(responseBody);
            }
        } as Response);
    };

    describe('should construct with expected config', () => {
        it('should throw an error if no secret token is provided', () => {
            expect(() => {
                new MoonsenseClient({} as unknown as MoonsenseClientConfig);
            }).toThrow('secretToken must be provided in config');
        });
    
        it('should use the default config values when not provided', () => {
            const client = new MoonsenseClient({secretToken: 'test'});
            expect(client['config'].rootDomain).toEqual(MoonsenseClient.DEFAULT_ROOT_DOMAIN);
            expect(client['config'].protocol).toEqual(MoonsenseClient.DEFAULT_PROTOCOL);
            expect(client['config'].defaultRegion).toEqual(MoonsenseClient.DEFAULT_REGION);
        });

        it('should use environment variables when provided', () => {
            process.env.MOONSENSE_SECRET_TOKEN = 'test';
            process.env.MOONSENSE_ROOT_DOMAIN = 'domain';
            process.env.MOONSENSE_PROTOCOL = 'http';
            process.env.MOONSENSE_DEFAULT_REGION = 'region';

            const client = new MoonsenseClient();
            expect(client['config'].secretToken).toEqual('test');
            expect(client['config'].rootDomain).toEqual('domain');
            expect(client['config'].protocol).toEqual('http');
            expect(client['config'].defaultRegion).toEqual('region');

            delete process.env.MOONSENSE_SECRET_TOKEN;
            delete process.env.MOONSENSE_ROOT_DOMAIN;
            delete process.env.MOONSENSE_PROTOCOL;
            delete process.env.MOONSENSE_DEFAULT_REGION;
        });
    });

   

    describe('control plane', () => {
        it('should run listRegions', async () => {
            const response = controlplane.DataRegionsListResponse.encode({
                regions: [
                    {
                        name: 'us-central1',
                    },
                    {
                        name: 'europe-west1.gcp',
                    }
                ]
                
            }).finish();
            mockRequest(response);
    
            const client = new MoonsenseClient({secretToken: 'test'});
            const result = await client.listRegions();
            
            expect(result.length).toBe(2);
            expect(result[0].name).toBe('us-central1');
            expect(result[1].name).toBe('europe-west1.gcp');
    
            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://api.moonsense.cloud/v2/regions');
            expect(request?.method).toEqual('GET');

            // Verify auth set
            const headers = request?.headers as any;
            expect(headers['Authorization']).toBe('Bearer test');
        });
    });

    describe('data plane', () => {
        it('should handle bad response status', async () => {
            mockRequest(undefined, 500);

            const client = new MoonsenseClient({secretToken: 'test'});
            await expect(client.whoAmI()).rejects.toThrow();
            
        })

        it('should run whoami', async () => {
            const response = common.TokenSelfResponse.encode({
                scopes: 'q',
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            const result = await client.whoAmI();
            
            expect(result.scopes).toBe('q');

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/tokens/self');
            expect(request?.method).toEqual('GET');
        });

        describe('list journeys', () => {
            it('should list journeys with no config', async () => {
                const response = dataplane.JourneyListResponse.encode({
                    journeys: [
                        {
                            journeyId: 'journey1',
                            sessionCount: 1,
                        },
                        {
                            journeyId: 'journey2',
                            sessionCount: 2,
                        }
                    ],
                }).finish();
                mockRequest(response);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listJourneys();
                
                expect(result.hasMore).toBe(false);
                expect(result.journeys.length).toBe(2);
                expect(result.journeys[0].journeyId).toBe('journey1');

                // Shouldn't have a next page
                await expect(result.nextPage()).rejects.toThrow('No more journeys to fetch');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys?');
                expect(request?.method).toEqual('GET');
            });

            it('should list journeys with search params', async () => {
                const response = dataplane.JourneyListResponse.encode({
                    journeys: [
                        {
                            journeyId: 'journey1',
                            sessionCount: 1,
                        },
                        {
                            journeyId: 'journey2',
                            sessionCount: 2,
                        }
                    ],
                }).finish();
                mockRequest(response);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listJourneys({
                    journeysPerPage: 2,
                    platforms: [common.DevicePlatform.ANDROID, common.DevicePlatform.WEB],
                    since: new Date('2021-01-01'),
                    until: new Date('2021-01-02'),
                });
                
                expect(result.hasMore).toBe(false);
                expect(result.journeys.length).toBe(2);
                expect(result.journeys[0].journeyId).toBe('journey1');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                const splitUrl = url.toString().split('?');
                expect(splitUrl[0]).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys');
                expect(request?.method).toEqual('GET');

                const params = new URLSearchParams(splitUrl[1]);
                expect(params.get('per_page')).toEqual('2');
                expect(params.getAll('filter[platforms][]')[0]).toEqual('ANDROID');
                expect(params.getAll('filter[platforms][]')[1]).toEqual('WEB');
                expect(params.get('filter[min_created_at]')).toEqual('2021-01-01T00:00:00.000Z');
                expect(params.get('filter[max_created_at]')).toEqual('2021-01-02T00:00:00.000Z');
            });

            it('should handle pagination', async () => {
                const response1 = dataplane.JourneyListResponse.encode({
                    journeys: [
                        {
                            journeyId: 'journey1',
                            sessionCount: 1,
                        },
                        {
                            journeyId: 'journey2',
                            sessionCount: 2,
                            createdAt: new google.protobuf.Timestamp({
                                seconds: new Date('2021-01-01').getTime() / 1000,
                            }),
                        }
                    ],
                    pagination: {
                        nextPage: 1,
                    }
                }).finish();
                mockRequest(response1);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listJourneys();
                
                expect(result.hasMore).toBe(true);
                expect(result.journeys.length).toBe(2);
                expect(result.journeys[0].journeyId).toBe('journey1');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys?');
                expect(request?.method).toEqual('GET');

                // Clear the mock and request the second page
                mockFetch.mockClear();

                const response2 = dataplane.JourneyListResponse.encode({
                    journeys: [
                        {
                            journeyId: 'journey3',
                            sessionCount: 1,
                        },
                    ],
                }).finish();
                mockRequest(response2);

                const result2 = await result.nextPage();
                expect(result2.journeys.length).toBe(1);
                expect(result2.journeys[0].journeyId).toBe('journey3');

                const calls2 = mockFetch.mock.calls;
                const url2 = calls2[0][0];
                const request2 = calls2[0][1];
                expect(url2).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys?filter%5Bmax_created_at%5D=2021-01-01T00%3A00%3A00.000Z');
                expect(request2?.method).toEqual('GET');

            });

            it('should handle pagination - nextPage error', async () => {
                const response1 = dataplane.JourneyListResponse.encode({
                    journeys: [
                    ],
                    pagination: {
                        nextPage: 1,
                    }
                }).finish();
                mockRequest(response1);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listJourneys();
                
                expect(result.hasMore).toBe(true);

                expect(
                    result.nextPage()
                ).rejects.toThrow('Could not determine the last journey creation date');

            });

            it('should limit max journeys per page', async () => {
                const response1 = dataplane.JourneyListResponse.encode({
                    journeys: [
                        {
                            journeyId: 'journey1',
                            sessionCount: 1,
                        },
                    ],
                    pagination: {
                        nextPage: 1,
                    }
                }).finish();
                mockRequest(response1);

                const client = new MoonsenseClient({secretToken: 'test'});
                await client.listJourneys({
                    journeysPerPage: 100000,
                });

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys?per_page=100');
                expect(request?.method).toEqual('GET');
            });
        });

        it('should describe journey', async () => {
            const response = dataplane.JourneyDetailResponse.encode({
                journey: {
                    journeyId: 'abc',
                },
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            const result = await client.describeJourney('abc');

            expect(result.journey?.journeyId).toBe('abc');

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys/abc');
            expect(request?.method).toEqual('GET');
        });

        it('should get journey feedback', async () => {
            const response = journey_feedback.JourneyFeedback.encode({
                fraudFeedback: {
                    isFraud: true,
                },
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            const result = await client.getJourneyFeedback('abc');

            expect(result.fraudFeedback?.isFraud).toBe(true);

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys/abc/feedback');
            expect(request?.method).toEqual('GET');
        });

        it('should add journey feedback', async () => {
            mockRequest();

            const client = new MoonsenseClient({secretToken: 'test'});
            await client.addJourneyFeedback('abc', {
                fraudFeedback: {
                    isFraud: true,
                }
            });

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/journeys/abc/feedback');
            expect(request?.method).toEqual('POST');

            const decodeBody = journey_feedback.JourneyFeedback.decode(request!.body as Uint8Array);
            expect(decodeBody.fraudFeedback?.isFraud).toBe(true);
        });

        it('should add journey feedback - error', async () => {
            mockRequest(undefined, 400);

            const client = new MoonsenseClient({secretToken: 'test'});

            expect(client.addJourneyFeedback('abc', {
                fraudFeedback: {
                    isFraud: true,
                }
            })).rejects.toThrow();
        });

        describe('list sessions', () => {
            it('should list sessions with no config', async () => {
                const response = dataplane.SessionListResponse.encode({
                    sessions: [
                        {
                            sessionId: 'abc',
                            journeyId: 'journey1',
                        },
                        {
                            sessionId: 'xyz',
                            journeyId: 'journey2',
                        }
                    ],
                }).finish();
                mockRequest(response);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listSessions();
                
                expect(result.hasMore).toBe(false);
                expect(result.sessions.length).toBe(2);
                expect(result.sessions[0].sessionId).toBe('abc');

                // Shouldn't have a next page
                await expect(result.nextPage()).rejects.toThrow('No more sessions to fetch');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions?');
                expect(request?.method).toEqual('GET');
            });

            it('should list sessions with search params', async () => {
                const response = dataplane.SessionListResponse.encode({
                    sessions: [
                        {
                            sessionId: 'abc',
                            journeyId: 'journey1',
                        },
                        {
                            sessionId: 'xyz',
                            journeyId: 'journey2',
                        }
                    ],
                }).finish();
                mockRequest(response);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listSessions({
                    sessionsPerPage: 2,
                    labels: ['test1', 'test2'],
                    journeyId: 'journey1',
                    platforms: [common.DevicePlatform.ANDROID, common.DevicePlatform.WEB],
                    since: new Date('2021-01-01'),
                    until: new Date('2021-01-02'),
                });
                
                expect(result.hasMore).toBe(false);
                expect(result.sessions.length).toBe(2);
                expect(result.sessions[0].sessionId).toBe('abc');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                const splitUrl = url.toString().split('?');
                expect(splitUrl[0]).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions');
                expect(request?.method).toEqual('GET');

                const params = new URLSearchParams(splitUrl[1]);
                expect(params.get('per_page')).toEqual('2');
                expect(params.getAll('filter[labels][]')[0]).toEqual('test1');
                expect(params.getAll('filter[labels][]')[1]).toEqual('test2');
                expect(params.get('filter[journey_id]')).toEqual('journey1');
                expect(params.getAll('filter[platforms][]')[0]).toEqual('ANDROID');
                expect(params.getAll('filter[platforms][]')[1]).toEqual('WEB');
                expect(params.get('filter[min_created_at]')).toEqual('2021-01-01T00:00:00.000Z');
                expect(params.get('filter[max_created_at]')).toEqual('2021-01-02T00:00:00.000Z');
            });

            it('should list sessions with sessionPerPage < 0', async () => {
                const response = dataplane.SessionListResponse.encode({
                    sessions: [
                        {
                            sessionId: 'abc',
                            journeyId: 'journey1',
                        },
                        {
                            sessionId: 'xyz',
                            journeyId: 'journey2',
                        }
                    ],
                }).finish();
                mockRequest(response);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listSessions({
                    sessionsPerPage: -1,
                });
                
                expect(result.hasMore).toBe(false);
                expect(result.sessions.length).toBe(2);
                expect(result.sessions[0].sessionId).toBe('abc');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                const splitUrl = url.toString().split('?');
                expect(splitUrl[0]).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions');
                expect(request?.method).toEqual('GET');

                // Per page should not be set when sessionPerPage < 0
                const params = new URLSearchParams(splitUrl[1]);
                expect(params.get('per_page')).toBeNull();
            });

            it('should list sessions with sessionPerPage > max', async () => {
                const response = dataplane.SessionListResponse.encode({
                    sessions: [
                        {
                            sessionId: 'abc',
                            journeyId: 'journey1',
                        },
                        {
                            sessionId: 'xyz',
                            journeyId: 'journey2',
                        }
                    ],
                }).finish();
                mockRequest(response);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listSessions({
                    sessionsPerPage: 10000,
                });
                
                expect(result.hasMore).toBe(false);
                expect(result.sessions.length).toBe(2);
                expect(result.sessions[0].sessionId).toBe('abc');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                const splitUrl = url.toString().split('?');
                expect(splitUrl[0]).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions');
                expect(request?.method).toEqual('GET');

                // Per page should not be set when sessionPerPage < 0
                const params = new URLSearchParams(splitUrl[1]);
                expect(params.get('per_page')).toBe('100');
            });

            it('should handle pagination', async () => {
                const response1 = dataplane.SessionListResponse.encode({
                    sessions: [
                        {
                            sessionId: 'abc',
                            journeyId: 'journey1',
                        },
                        {
                            sessionId: 'xyz',
                            journeyId: 'journey2',
                            createdAt: new google.protobuf.Timestamp({
                                seconds: new Date('2021-01-01').getTime() / 1000,
                            }),
                        }
                    ],
                    pagination: {
                        nextPage: 1,
                    }
                }).finish();
                mockRequest(response1);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listSessions();
                
                expect(result.hasMore).toBe(true);
                expect(result.sessions.length).toBe(2);
                expect(result.sessions[0].sessionId).toBe('abc');

                expect(mockFetch).toHaveBeenCalledTimes(1);
                const calls = mockFetch.mock.calls;
                const url = calls[0][0];
                const request = calls[0][1];
                expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions?');
                expect(request?.method).toEqual('GET');

                // Clear the mock and request the second page
                mockFetch.mockClear();

                const response2 = dataplane.SessionListResponse.encode({
                    sessions: [
                        {
                            sessionId: 'qrs',
                            journeyId: 'journey1',
                        },
                    ],
                }).finish();
                mockRequest(response2);

                const result2 = await result.nextPage();
                expect(result2.sessions.length).toBe(1);
                expect(result2.sessions[0].sessionId).toBe('qrs');

                const calls2 = mockFetch.mock.calls;
                const url2 = calls2[0][0];
                const request2 = calls2[0][1];
                expect(url2).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions?filter%5Bmax_created_at%5D=2021-01-01T00%3A00%3A00.000Z');
                expect(request2?.method).toEqual('GET');

            });

            it('should handle pagination - nextPage error - no sessions', async () => {
                const response1 = dataplane.SessionListResponse.encode({
                    sessions: [
                    ],
                    pagination: {
                        nextPage: 1,
                    }
                }).finish();
                mockRequest(response1);

                const client = new MoonsenseClient({secretToken: 'test'});
                const result = await client.listSessions();
                
                expect(result.hasMore).toBe(true);
                
                expect(
                    result.nextPage()
                ).rejects.toThrowError('Could not determine the last session creation date');

            });
        });

        it('should describe session with full view', async () => {
            const response = dataplane.Session.encode({
                sessionId: 'abc',
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            const result = await client.describeSession('abc');

            expect(result.sessionId).toBe('abc');

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions/abc?view=full');
            expect(request?.method).toEqual('GET');
        });

        it('should describe session with minimal view', async () => {
            const response = dataplane.Session.encode({
                sessionId: 'abc',
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            const result = await client.describeSession('abc', true);

            expect(result.sessionId).toBe('abc');

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions/abc?view=minimal');
            expect(request?.method).toEqual('GET');
        });

        it('should find data region from describe', async () => {
            const response = dataplane.Session.encode({
                sessionId: 'abc',
                regionId: 'europe-west1',
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            const dataPlaneClient = await client['findDataRegion']('abc');
            expect(dataPlaneClient['baseUrl']).toBe('https://europe-west1.data-api.moonsense.cloud');
        });

        it('should fetch data region without describe', async () => {
            const client = new MoonsenseClient({secretToken: 'test'});
            const dataPlaneClient = await client['findDataRegion']('abc', 'us-central1');
            expect(dataPlaneClient['baseUrl']).toBe('https://us-central1.data-api.moonsense.cloud');
        });

        it('should throw error on missing region', async () => {
            const response = dataplane.Session.encode({
                sessionId: 'abc',
            }).finish();
            mockRequest(response);

            const client = new MoonsenseClient({secretToken: 'test'});
            await expect(client['findDataRegion']('abc')).rejects.toThrow();
        });

        it('should list session features', async () => {
            const response = dataplane.SessionFeaturesResponse.encode({
                sessionId: 'abc',
                cloudNetwork: {
                    'network_telemetry-connection_type': {
                        stringList: {
                            value: ['wifi']
                        }
                    }
                }
            }).finish();
            mockRequest(response);


            // Verify that it does region resolution
            const client = new MoonsenseClient({secretToken: 'test'});
            const regionSpy = jest.spyOn(client, 'findDataRegion' as any);
            regionSpy.mockResolvedValue(client['getDataRegionClient']('us-central1.gcp'));

            const result = await client.listSessionFeatures('abc');

            expect(result.sessionId).toBe('abc');
            expect(result.cloudNetwork?.['network_telemetry-connection_type']?.stringList?.value?.[0]).toEqual('wifi')

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions/abc/features');
            expect(request?.method).toEqual('GET');
        });

        it('should list session signals', async () => {
            const response = dataplane.SignalsResponse.encode({
                os: {
                    predictedOsFamily: 'linux',
                },
            }).finish();
            mockRequest(response);


            // Verify that it does region resolution
            const client = new MoonsenseClient({secretToken: 'test'});
            const regionSpy = jest.spyOn(client, 'findDataRegion' as any);
            regionSpy.mockResolvedValue(client['getDataRegionClient']('us-central1.gcp'));

            const result = await client.listSessionSignals('abc');

            expect(result.os?.predictedOsFamily).toBe('linux');

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions/abc/signals');
            expect(request?.method).toEqual('GET');
        });

        it('should read session bundles', async () => {
            const fileDataPromise = new Promise((resolve, reject) => {
                fs.readFile('test/sample.tar.gz', (err, data) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(data);
                });
            });

            const fileData = await fileDataPromise;
            expect(fileData).toBeDefined();
            

            mockFetch.mockResolvedValue({
                ok: true,
                status: 200,
                arrayBuffer: () => {
                    return Promise.resolve(fileData);
                }
            } as Response);
            

            // Verify that it does region resolution
            const client = new MoonsenseClient({secretToken: 'test'});
            const regionSpy = jest.spyOn(client, 'findDataRegion' as any);
            regionSpy.mockResolvedValue(client['getDataRegionClient']('us-central1.gcp'));

            const result = await client.readSession('abc');
            expect(result).toBeDefined();
            expect(result.length).toBe(4);

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions/abc/bundles');
            expect(request?.method).toEqual('GET');
        });

        it('should update session labels', async () => {
            mockRequest();

            const client = new MoonsenseClient({secretToken: 'test'});
            await client.updateSessionLabels('abc', ['label1', 'label2']);

            expect(mockFetch).toHaveBeenCalledTimes(1);
            const calls = mockFetch.mock.calls;
            const url = calls[0][0];
            const request = calls[0][1];
            expect(url).toEqual('https://us-central1.gcp.data-api.moonsense.cloud/v2/sessions/abc/labels');
            expect(request?.method).toEqual('POST');

            const decodeBody = dataplane.SessionLabelCreateRequest.decode(request!.body as Uint8Array);
            expect(decodeBody.labels[0].name).toBe('label1');
            expect(decodeBody.labels[1].name).toBe('label2');
        });

        it('should update session labels - error', async () => {
            mockRequest(undefined, 400);

            const client = new MoonsenseClient({secretToken: 'test'});
            expect(
                client.updateSessionLabels('abc', ['label1', 'label2']
            )).rejects.toThrow();
        });
    });
    
});

describe('timestampFromDate', () => {
    it('should convert date to timestamp', () => {
        const date = new Date('2021-01-01T00:00:00.001Z');
        const timestamp = timestampFromDate(date);

        expect(timestamp.seconds).toBe(1609459200);
        expect(timestamp.nanos).toBe(1000000);
    });
});