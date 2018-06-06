const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

function getAll(usersId){
  return (
    knex('votes')
    .where({user_id: usersId})
    .returning('*')
  )
}

function create(usersID, cityId){
  console.log(usersID, cityId)
  return (
    knex('votes')
    .insert({user_id: usersID, city_id: cityId})
    .returning('*')
    )
}

function remove(favoritesId){
  return (
    knex('votes')
    .where({id: favoritesId})
    .del()
    .returning('*')
  )
}


module.exports = {getAll, create, remove}
