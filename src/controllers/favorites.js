const favoriteModel = require('../models/favorites')


function getAll(req, res, next){
  favoriteModel.getAll(req.params.usersId)
  .then(allFavorites => {
    res.status(200).send({ allFavorites })
  })
}


function create(req, res, next){
  console.log("params:",req.params, "body:", req.body)

  if(!req.params.usersId){
    return next({status:400, message:'Bad Request'})
  }
  favoriteModel.create(req.params.usersId, req.params.cityId)
  .then(favorite => {
    res.status(200).send({favorite})
  })
  .catch(next)
}

function remove(req, res, next){
  if(!req.params.favoritesId){
    return next({status:400, message:'Bad Request'})
  }
  favoriteModel.remove(req.params.favoritesId)
  .then(favorite => {
    res.status(200).send({favorite})
  })
  .catch(next)
}

module.exports = { getAll, create, remove}
