const data = require('../../allCountries');

exports.seed = function(knex, Promise) {
  const tableData = data.reduce((acc, val) => {
    const lastEntry = acc[acc.length - 1];
    const newVal = {
      name: val.countryName,
      code: val.countryCode,
    };
    // const newVal = {};
    // newVal.name = val.countryName;
    // newVal.code = val.countryCode;
    if (
      lastEntry &&
      lastEntry.code === val.countryCode &&
      lastEntry.name === val.countryName
    ) {
      return acc;
    } else {
      return acc.concat([newVal]);
    }
  }, []);

  return knex('countries')
    .del()
    .then(() => {
      return knex('countries').insert(tableData);
    });
};
