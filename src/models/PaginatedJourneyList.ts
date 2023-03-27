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

import { DataPlaneClient } from '../services/DataPlaneClient';
import { dataplane } from './generated/protos';
import { ListJourneyConfig } from './ListJourneyConfig';

export class PaginatedJourneyList {
    private client: DataPlaneClient;
    private currentPageConfig: ListJourneyConfig;
    private journeyList: dataplane.JourneyListResponse;    

    constructor(
        client: DataPlaneClient, 
        config: ListJourneyConfig,
        journeyList: dataplane.JourneyListResponse,
    ) {
        this.client = client;
        this.currentPageConfig = JSON.parse(JSON.stringify(config)); // clone the config
        this.journeyList = journeyList;
    }

    public get journeys(): dataplane.IJourney[] {
        return this.journeyList.journeys;
    }

    public get hasMoreJourneys(): boolean {
        if (!this.journeyList || !this.journeyList.pagination) {
            return false;
        }

        return this.journeyList.pagination.nextPage !== 0;
    }

    public async nextPage(): Promise<PaginatedJourneyList> {
        if (!this.hasMoreJourneys) {
            throw new Error('No more journeys to fetch');
        }

        const lastJourney = this.journeyList.journeys[this.journeyList.journeys.length - 1];

        if (!lastJourney || !lastJourney.createdAt) {
            throw new Error('Could not determine the last journey creation date');
        }

        // Update the config to fetch the next page
        const nextPage = this.currentPageConfig;
        nextPage.until = new Date(
            (lastJourney.createdAt.seconds || 0 )  * 1000 +
            (lastJourney.createdAt.nanos || 0 ) / 1e6
        );

        // Fetch the next page
        const journeyList = await this.client.listJourneys(nextPage);

        return new PaginatedJourneyList(this.client, nextPage, journeyList);
    }
   
}