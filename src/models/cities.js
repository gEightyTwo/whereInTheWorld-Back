const knex = require("../../db/knex");
const bcrypt = require("bcrypt-as-promised");

// select comments.city_id as id, name, img, count(*) as comment_count from
// comments join cities on cities.id = comments.city_id group by
// comments.city_id, cities.name order by comment_count desc limit 10;

// function getAllWithMostComments() {
//     console.log('made it to model')
//   return knex.raw(`
//         select comments.city_id as id, name, img, count(*) as comment_count from
//         comments join cities on cities.id = comments.city_id  group by
//         comments.city_id, cities.name, cities.img order by comment_count desc limit 3;
//         `)
//         .then(data => {
//             return data.rows
//         })
// }

function getOne(cityName) {
  return knex("cities")
    .where({ name: cityName })
    .first()
    .catch(err => {
      console.log(err);
    })
}

function create(cityName){
   return knex('cities')
    .insert({name: cityName})
    .returning("*")
}

module.exports = {
    // getAllWithMostComments,
    getOne,
    create
}
