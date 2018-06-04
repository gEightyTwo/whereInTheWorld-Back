const userModel = require('../models/users')


function getOne(req, res, next){
  console.log("made it to getOne controller")
 if(!req.params.usersId) {
   return next({ status: 400, message:'Bad Request'})
 }
 userModel.getOne(req.params.usersId)
 .then(data =>{
   delete data.password
   res.status(200).send({ data })
 })
 .catch(next)
}

function getUserByEmail(req, res, next){
  console.log(req.params, "made it to getUser controller")
  if(!req.params.email) {
  return next({ status: 400, message:'Bad Request'})
}
  userModel.getUserByEmail(req.params.email)
  .then(data => {
    res.status(200).send({ data })
  })
  .catch(next)
}

function create(req, res, next){
  console.log("made it to create controller")
  if(!req.body.email || !req.body.password || !req.body.fname || !req.body.lname){
    return next({ status: 400, message: 'Missing user creation fields'})
  }

  userModel.create(req.body)
  .then(function(data) {

    return res.status(201).send({
      data
    })
  })
  .catch(next)
}


function remove(req, res, next){
  console.log("made it to remove controller")
  userModel.remove(parseInt(req.params.usersId))
  .then(function(data){
    res.status(200).send({ data })
  })
  .catch(next)
}

module.exports = {getOne, create, remove, getUserByEmail}
