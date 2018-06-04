
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultsTo('');
    table.string('last_name').notNullable().defaultsTo('');
    table.string('email').notNullable().defaultsTo('');
    table.string('hashed_password').notNullable().defaultsTo('');
    table.boolean('admin').notNullable().defaultsTo(false)
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
