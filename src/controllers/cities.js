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
  if (!req.params.cityId) {
    return next({ status: 400, message: "Bad Request" });
  }
  userModel
    .getOne(req.params.cityId)
    .then(data => {
      res.status(200).send({ data });
    })
    .catch(next);
}

module.exports = {
    getAllWithMostComments,
    getOne
}
