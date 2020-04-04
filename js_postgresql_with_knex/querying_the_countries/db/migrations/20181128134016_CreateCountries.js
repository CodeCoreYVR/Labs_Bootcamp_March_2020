exports.up = function(knex, Promise) {
  return knex.schema.createTable('countries', table => {
    table.increments('id');
    table.string('name');
    table.string('code');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('countries');
};
