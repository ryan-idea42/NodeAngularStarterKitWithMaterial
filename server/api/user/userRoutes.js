var router = require('express').Router();
var controller = require('./userController');

//////////// GET ////////////
router.route('/:userName').get(controller.getByName)

//////////// POST ////////////
router.route('/').post(controller.createUser);

module.exports = router;
