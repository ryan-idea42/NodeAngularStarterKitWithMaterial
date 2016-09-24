var router = require('express').Router();
var controller = require('./userController');

//////////// GET ////////////
router.route('/:id').get(controller.getById)

//////////// POST ////////////
router.route('/').post(controller.createUser);

module.exports = router;
