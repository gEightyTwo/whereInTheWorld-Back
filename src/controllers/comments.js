const commentModel = require('../models/comments')


function getAll(req, res, next){
  commentModel.getAll(req.params.cityId)
  .then(allReviews => {
    console.log('hello boi', allReviews)
    res.status(200).send({ allReviews })
  })
}

function getOne(req, res, next){
  if(!req.params.commentsId){
    return next({status:400, message:'Bad Request'})
  }
  commentModel.getOne(req.params.commentsId)
  .then(comment => {
    res.status(200).send({comment})
  })
  .catch(next)
}

function create(req, res, next){
  console.log("params:",req.params, "body:", req.body)

  if(!req.params.usersId){
    return next({status:400, message:'Bad Request'})
  }
  commentModel.create(req.params.usersId, req.params.cityId, req.body.title, req.body.content)
  .then(comment => {
    res.status(200).send({comment})
  })
  .catch(next)
}

function update(req, res, next){
  if(!req.params.commentsId){
    return next({status:400, message:'Bad Request'})
  }
  commentModel.update(req.params.commentsId, req.body.title, req.body.content)
  .then(comment => {
    res.status(200).send({comment})
  })
  .catch(next)
}

function remove(req, res, next){
  if(!req.params.commentsId){
    return next({status:400, message:'Bad Request'})
  }
  commentModel.remove(req.params.commentsId)
  .then(comment => {
    res.status(200).send({comment})
  })
  .catch(next)
}

module.exports = {getOne, getAll, create, update, remove}
