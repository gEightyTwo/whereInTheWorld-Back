const express = require('express')
const router = express.Router()

const controller = require('../controllers/users')



router.get('/:usersId/', controller.getOne)

router.post('/', controller.create)
router.delete('/:usersId', controller.remove)


const favoriteController = require('../controllers/favorites')

router.get('/:usersId/favorites', favoriteController.getAll)
router.post('/:usersId/favorites', favoriteController.create)
router.delete('/:usersId/favorites/:favoritesId', favoriteController.remove)


const commentController = require('../controllers/comments')

router.get('/:usersId/city/:cityId/comments', commentController.getAll)
router.get('/:usersId/comments/:commentsId', commentController.getOne)

router.post('/:usersId/city/:cityId/comments', commentController.create)

router.put('/:usersId/comments/:commentsId', commentController.update)
router.delete('/:usersId/comments/:commentsId', commentController.remove)


const voteController = require('../controllers/votes')

router.get('/:usersId/comments/:commentsId/votes', voteController.getAll)
router.post('/:usersId/comments/:commentsId/votes', voteController.create)
router.delete('/:usersId/comments/:commentsId/votes', voteController.remove)

module.exports = router
