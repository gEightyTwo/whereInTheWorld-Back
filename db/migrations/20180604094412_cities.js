
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('img').notNullable();
    table.string('country').notNullable();
    table.string('state').notNullable();
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities')
};
