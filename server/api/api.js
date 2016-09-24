var router = require('express').Router();
var jwt = require('jsonwebtoken');
var app = require('express');
var config = require('../config/config');

router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.secrets.jwt, function (err, userContext) {
            if (err) {
                req.userContext = null;
                req.isAuthenticated = false;
                next();
            } else {
                req.userContext = userContext;
                req.isAuthenticated = true;
                next();
            }
        });

    } else {
        req.userContext = null;
        req.isAuthenticated = false;
        next();
    }
});

//////////// CONFIGURE ROUTES ////////////

router.use('/auth', require('./auth/authRoutes'));
router.use('/test', require('./test/testRoutes'));
router.use('/user', require('./user/userRoutes'));

module.exports = router;