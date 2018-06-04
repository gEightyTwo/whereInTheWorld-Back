
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (table) => {
    table.increments();
    table.string('name').notNullable().defaultsTo('');
    table.string('img').notNullable().defaultsTo('');
    table.string('comment_id').notNullable().defaultsTo('').references('comments.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities')
};
