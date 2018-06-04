const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Daniel', last_name: 'Shikoff' , email: 'daniel@daniel.com', hashed_password: '$2b$10$s5CaZZkrgapP/260Yfjd/O.K21qUWIQJk/ge30pvb50rK3A0vNVoS', admin: true},
        {id: 2, first_name: 'Abe', last_name: 'Queen', email: 'abe@abe.com', hashed_password: '$2b$10$s5CaZZkrgapP/260Yfjd/O.K21qUWIQJk/ge30pvb50rK3A0vNVoS', admin: true},
        {id: 3, first_name: 'Roger', last_name: 'Schmidt', email: 'roger@roger.com', hashed_password: '$2b$10$s5CaZZkrgapP/260Yfjd/O.K21qUWIQJk/ge30pvb50rK3A0vNVoS', admin: true}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
