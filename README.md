# tenor-client

tenor-client is a Node.js wrapper for the API for the video sharing service [Tenor](https://tenor.com).

tenor-client uses Google's API for accessing Tenor.
You can get the API key from your Google developer console. You can also get it quickly from the quickstart guide [here](https://developers.google.com/tenor/guides/quickstart).

## Features

- Supports all functions documented in the Tenor documentation.
- Uses undici, one of the fastest HTTP clients.
- Full typescript support.

## Installation

```sh
npm i tenor-client
yarn add tenor-client
pnpm add tenor-client
```

## Usage

```js
// supports cjs/esm/ts

// cjs
const { TenorClient } = require("tenor-client");
// esm/ts
import { TenorClient } from "tenor-client";

const client = new TenorClient({
    apiKey: "xxxxxxx-xxxxx_xxxxxxxxxxxxxxxxxxxxxxxxx", // required
    clientID: "xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com" // optional, this is your google project's client ID
})

client.search({ query: 'cute puppies' }).then(console.log);
client.searchSuggestions({ query: 'hello' }).then(console.log);
client.autocomplete({ query: 'hello' }).then(console.log);
client.featured().then(console.log);
client.categories().then(console.log);
client.trendingSearchTerms().then(console.log);
```

## Documentation

The documentation is hosted here: [https://tenor-client.pages.dev](https://tenor-client.pages.dev/)
