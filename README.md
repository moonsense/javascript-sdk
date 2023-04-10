# Moonsense API Client for Javascript/Typescript
This library simplifies interacting with the Moonsense APIs via a Javascript or Typescript application.

## Installation

Install the module using `npm`: 

```shell
npm install @moonsense/javascript-sdk
```

## Getting Started

Start by getting an API secret key by navigating to App in Console and creating a token. You will need to save the generated secret key to a secure place.

https://console.moonsense.cloud/dashboard

The configuration can be handled by passing a `MoonsenseClientConfig` or by setting the following environment variables. The most likely variables to set are:

- MOONSENSE_SECRET_TOKEN: the secret token fetched from the Moonsense Console
- MOONSENSE_DEFAULT_REGION: the default region to talk to to gather session information.

```typescript
import { MoonsenseClient, ListSessionConfig, common } from '@moonsense/javascript-sdk';

// Fetch token information
const me = await client.whoAmI();
console.log(me);

// Loop through pages of sessions
const maxPages = 3;
let page = 0;

let paginated = await client.listSessions();
do {
    console.log(`Page ${page}`, paginated.sessions);

    if (paginated.hasMore) {
        page++;
        paginated = await paginated.nextPage();
    } else {
        break
    }

} while(page < maxPages);

// Fetch features for a specific session. Specifying the 
// region the session is in will result in a faster lookup
const features = await client.listSessionFeatures('<session-id>', 'asia-south1.gcp');
console.log(features);

// Fetch signals for a specific session. Specifying the 
// region the session is in will result in a faster lookup
const signals = await client.listSessionSignals('<session-id>', 'asia-south1.gcp');
console.log(signals);

```

### Add Journey Feedback

Adding feedback to journeys provides a mechanism for tracking some special details against a given journey. For example, if a journey is determined to contain fraud, the journey can be flagged as fraudulent using Journey Feedback.

```typescript
await client.addJourneyFeedback('<journey-id>', {
    fraudFeedback: {
        isFraud: true,
        reportedAt: timestampFromDate(new Date()),
        fraudReason: "It was fraud because...",
    }
});
```

`timestampFromDate(...)` is a helper method provided to simplify conversions between Javascript dates and the protobuf timestamp expected.

Other supported feedback types can be found by looking at the `journey_feedback.IJourneyFeedback` type definition.

## Terms Of Service

The Moonsense Go SDK is distributed under the [Moonsense Terms Of Service](https://www.moonsense.io/terms-of-service).

## Support

Feel free to raise an [Issue](https://github.com/moonsense/javascript-sdk/issues) around bugs, usage, concerns or feedback.