var router = require('express').Router();
var controller = require('./authController');

//////////// POST ////////////
router.route('/').post(controller.authenticate);

module.exports = router;
