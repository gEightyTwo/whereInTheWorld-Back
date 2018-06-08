const TABLE_NAME = 'votes'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, user_id: 3, comment_id:3, vote: 1},
        {id: 2, user_id: 2, comment_id:2, vote: 1},
        {id: 3, user_id: 1, comment_id:1, vote: -1}

      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
