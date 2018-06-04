
exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', (table) => {
    table.increments();
    table.integer('user_id').notNullable().references('users.id');
    table.integer('comment_id').notNullable().references('comments.id');
    table.integer('vote')
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes')
};
