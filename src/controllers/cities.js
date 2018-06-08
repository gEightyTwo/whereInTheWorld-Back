const citiesModel = require("../models/cities");

function getAllWithMostComments(req, res, next) {
    console.log('made it to getAll cities controller');
    citiesModel.getAllWithMostComments()
    .then(data => {
        res.status(200).send({ data });
    })
    .catch(next);
}

// function getSome(req, res, next) {

// }

function getOne(req, res, next) {
  console.log("made it to getOne controller");
  if (!req.params.cityName) {
    return next({ status: 400, message: "Bad Request" });
  }
  citiesModel
    .getOne(req.params.cityName)
    .then(data => {
      res.status(200).send({ data });
    })
    .catch(next);
}

function create(req, res, next){
    citiesModel.create(req.body.name)
    .then(data => {
        res.status(200).send({ data });
    })
    .catch(next);
}

module.exports = {
    // getAllWithMostComments,
    getOne,
    create
}
