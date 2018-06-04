
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('user_id').notNullable().references('users.id');
    table.integer('city_id').notNullable().references('cities.id');
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
