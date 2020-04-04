const fetch = require('node-fetch');
const pfs = require('./pfs');

(async () => {
  const length10Arr = Array.from({ length: 10 });
  const people = await Promise.all(
    length10Arr.map((_, i) =>
      fetch(`https://swapi.co/api/people/${i + 1}`).then(res => res.json()),
    ),
  );
  await Promise.all(
    people.map(person =>
      pfs.writeFile(`./${snakeCaseName(person.name)}.json`, JSON.stringify(person)),
    ),
  );
  console.log('finishing writing 10 people');
})();

function snakeCaseName(fullName) {
  return fullName
    .split(' ')
    .map(name => name.toLowerCase())
    .join('_');
}
