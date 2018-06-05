const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

function getAll(commentsId){
  return (
    knex('votes')
    .where({comment_id: commentsId})
    .returning('*')
  )
}

function create(usersID, commentsId, val){
  console.log(usersID, commentsId, val)
  return (
    knex('votes')
    .insert({user_id: usersID, comment_id: commentsId, vote: val})
    .returning('*')
    )
}

function remove(usersId, commentsId){
  return (
    knex('votes')
    .where({user_id: usersId, comment_id: commentsId})
    .del()
    .returning('*')
  )
}


module.exports = {getAll, create, remove}
