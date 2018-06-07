const express = require('express')
const router = express.Router()

const controller = require('../controllers/cities')

router.get('/:cityName/', controller.getOne)
router.get('/', controller.getAllWithMostComments)
router.post('/', controller.create)
// router.post('/', controller.create)

module.exports = router