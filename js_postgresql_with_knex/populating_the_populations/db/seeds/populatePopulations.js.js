const data = require('../../allCountries');

exports.seed = function(knex, Promise) {
  return knex('populations')
    .del()
    .then(() => {
      return knex.select('id', 'code').from('countries');
    })
    .then(countries => {
      const tableData = data.map(entry => ({
        year: entry.year,
        // Math.floor is required due to the fact that quantity is an integer
        // but not all of the values in our dataset are integers.
        // I am not sure how you count 0.8877 of a person...but they did
        // and so we have to account for that.
        quantity: Math.floor(entry.value),
        // In addition to this, some of the numbers in our dataset are so large
        // that they are literally too big to be integers!
        // read more about that here:
        //      https://en.wikipedia.org/wiki/Integer_(computer_science)
        // so we had to create a new migration to change the data type of
        // populations.quantity to be a `bigint`. This is literally just a
        // larger integer than the built in integer.
        // check out the third migration file `/db/migrations` and amke sure you
        // run that migration first.
        country_id: countries.find(
          country => country.code === entry.countryCode,
        ).id,
      }));
      return knex('populations').insert(tableData);
    });
};
