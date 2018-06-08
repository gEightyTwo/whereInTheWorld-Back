const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

function getAll(cityId){
  return (
    knex('comments')
    .where({city_id: cityId})
    // .innerJoin('votes', 'comments.id', 'votes.comment_id')
    // .returning('*')
    .then(comments => {
      const promises = comments.map( comment => {
        return knex('votes')
          .where('comment_id', comment.id)
          .sum('vote')
          .then(res => {
            if(res[0].sum === null){
              comment.vote = 0
            } else {
              comment.vote = res[0].sum
            }
            return comment
          })
      })

      return Promise.all(promises)
    })
  )
}

function getOne(id){
  return (
    knex('comments')
    .where({id})
    .returning('*')
  )
}

// function checkUser(usersID, cityId){
//   return (
//     knex('comments')
//     .where({ city_id: cityId, user_id: usersId })
//     .first()
//   )
// }

function create(usersID, cityId, title, content){
  console.log(usersID, cityId, title, content)

  // return checkUser(usersID, cityId)
  // .then(data => {
    // if(data) throw { status: 400, message:'User already created city'}
    return (
    knex('comments')
    .insert({user_id: usersID, city_id: cityId, title, content})
    .returning('*')
    )
  // })
}

function update(commentsId, title, content){
  const toUpdate = {}
  if(title){
    toUpdate.title = title
  }
  if(content){
    toUpdate.content = content
  }

  return (
    knex('comments')
    .where({id: commentsId})
    .update(toUpdate)
    .returning('*')
  )
}

function remove(commentsId){
  return (
    knex('votes')
    .where({comment_id: commentsId})
    .del()
  ).then(response => {
    return (
      knex('comments')
      .where({id: commentsId})
      .del()
      .returning('*')
    )
  })
}

module.exports = {getOne, getAll, create, update, remove}
