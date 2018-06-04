const TABLE_NAME = 'cities'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Denver', state: 'Colorado', country: 'United States of America', img: 'https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_645,q_50,w_1024/v1/clients/denver/4f616c91_3217_4da7_807e_ede1e41bf98e_276dbd3a-8822-49ba-9246-41767b077386.jpg'},
        {id: 2, name: 'Seattle', state: 'Washington', country: 'United States of America', img: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/08/04/103845788-_sites-default-files-images-103845788-GettyImages-155735310.1910x1000.jpg'},
        {id: 3, name: 'New York', state: 'New York', country: 'United States of America', img: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
