Go to the [Star Wars API](https://swapi.co/). Get familiar with it. Once you're familiar, you will use [`node-fetch`](https://github.com/bitinn/node-fetch) to download the JSON for the first 10 people. You can get the JSON for a person through the `https://swapi.co/api/people/:id` URL.

1. Create a `package.json`

2. Install `node-fetch`. This package allows you to use `fetch` in Node.js.

3. Using your promisied fs methods and `node-fetch`, download the JSON for the first 10 people. That is people with the ids 1 through 10.

4. Then, create a file named after the person in snake case (i.e. `leia_organa.json`) containing their downloaded JSON.

To do this, you should first do it with a single person. Then, two. Then, the rest.
