// Create a package.json and install node-fetch
// npm init -y
// npm i node-fetch

const fetch = require("node-fetch");
const fs = require("fs").promises;

const run = async () => {
  const urls = (await fs.readFile("./links.txt", "utf8")).split(/\n/);

  const bodies = await Promise.all(
    urls.map(url => fetch(url).then(r => r.text())) // You can still use .then in an async function
  );

  await fs.mkdir("./bodies");

  for (let [index, body] of Object.entries(bodies)) {
    // `await` works in a loop!
    await fs.writeFile(`./bodies/body-${index}.json`, body);
  }

  console.log("Job done!");
};

run();
