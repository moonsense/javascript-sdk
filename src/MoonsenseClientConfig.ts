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


/**
 * The configuration object used to initialize a Moonsense Client. Values
 * not provided will be read from the environment if possible. If not
 * provided in the environment, the default values will be used.
 */
export interface MoonsenseClientConfig {
     /**
      * API secret token generated from the Moonsense Cloud web console.
      * 
      * This value can also be provided via the MOONSENSE_SECRET_TOKEN environment variable.
      */
     secretToken: string

     /**
     * Root API domain (defaults to moonsense.cloud)
     * 
     * This value can also be provided via the MOONSENSE_ROOT_DOMAIN environment variable.
     */
     rootDomain?: string

     /**
     * Protocol to use when connecting to the API (defaults to https)
     * 
     * This value can also be provided via the MOONSENSE_PROTOCOL environment variable.
     */
     protocol?: string

     /**
     * Default Moonsense Cloud Data Plane region to connect to
     * 
     * This value can also be provided via the MOONSENSE_DEFAULT_REGION environment variable.
     */
     defaultRegion?: string
}