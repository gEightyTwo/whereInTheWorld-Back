
exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', (table) => {
    table.increments();
    table.string('user_id').notNullable().defaultsTo('').references('users.id');
    table.string('comment_id').notNullable().defaultsTo('').references('comments.id');
    table.enu('vote', (-1, 1))
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes')
};
