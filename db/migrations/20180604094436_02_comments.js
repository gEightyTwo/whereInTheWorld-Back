
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.text('content').notNullable().defaultsTo('');
    table.string('user_id').notNullable().defaultsTo('').references('users.id');
    table.string('city_id').notNullable().defaultsTo('').references('cities.id');
    table.integer('upvotes').notNullable().defaultsTo(0)
    table.integer('downvotes').notNullable().defaultsTo(0)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
