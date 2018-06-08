const voteModel = require('../models/votes')


function getAll(req, res, next){
  voteModel.getAll(req.params.commentsId)
  .then(allReviews => {
    console.log('!!!!', allReviews)
    res.status(200).send({ allReviews })
  })
}

function create(req, res, next){
  // console.log("params:",req.params, "body:", req.body)
  if(!req.params.usersId){
    return next({status:400, message:'Bad Request'})
  }
  voteModel.create(req.params.usersId, req.params.commentsId, req.body.val)
  .then(vote => {
    console.log(vote);
    res.status(200).send({vote})
  })
  .catch(next)
}

function remove(req, res, next){
  if(!req.params.usersId || !req.params.commentsId){
    return next({status:400, message:'Bad Request'})
  }
  voteModel.remove(req.params.usersId, req.params.commentsId)
  .then(vote => {
    res.status(200).send({vote})
  })
  .catch(next)
}


module.exports = {getAll, create, remove}
