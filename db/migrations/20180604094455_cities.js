
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (table) => {
    table.increments();
    table.string('name').notNullable().defaultsTo('');
    table.string('img').notNullable().defaultsTo('');
    table.string('country').notNullable().defaultsTo('');
    table.string('state').notNullable().defaultsTo('');
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities')
};
