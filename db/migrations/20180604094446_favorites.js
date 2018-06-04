
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.string('user_id').notNullable().defaultsTo('').references('users.id');
    table.string('city_id').notNullable().defaultsTo('').references('cities.id');
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
};
