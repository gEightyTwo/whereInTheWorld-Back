const TABLE_NAME = 'cities'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Denver'},
        {id: 2, name: 'Seattle'},
        {id: 3, name: 'New York'},
        {id: 4, name: 'Chicago'},
        {id: 5, name: 'San Diego'},
        {id: 6, name: 'Orlando'},
        {id: 7, name: 'Phoenix'},
        {id: 8, name: 'Las Vegas'},
        {id: 10, name: 'Detroit'},
        {id: 11, name: 'Cleveland'},
        {id: 12, name: 'Philadelphia'},
        {id: 13, name: 'Portland'},
        {id: 14, name: 'Boston'},
        {id: 15, name: 'New Orleans'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
