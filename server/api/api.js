var router = require('express').Router();

//router.use('/auth', require('./auth/authRoutes'));
router.use('/test', require('./test/testRoutes'));
router.use('/user', require('./user/userRoutes'));

module.exports = router;