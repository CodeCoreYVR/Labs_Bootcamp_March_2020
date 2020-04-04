exports.up = function(knex, Promise) {
  return knex.schema.alterTable('populations', table => {
    table
      .bigint('quantity')
      .unsigned()
      .alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('populations', table => {
    table.integer('quantity').alter();
  });
};
