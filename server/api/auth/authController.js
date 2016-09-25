var userSchema = require('../../models/schemas/userSchema');
var user = require('../../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var common = require('../common');

exports.authenticate = function (req, res) {
    userSchema.findOne({ userName: req.body.userName }).then(function (success) {
        if (!success)
            return common.unauthorized(res, "User Not Found");

        var foundUser = new user(success);

        if (foundUser.passwordValid(req.body.password)) {
            var token = jwt.sign(foundUser, config.secrets.jwt, { expiresIn: config.expireTime });
            res.cookie('access-token', token);
            res.json({ success: true, message: "Success!" });
        }
        else
        {
            return common.unauthorized(res, "Invalid password!");
        }
    }, function (error) {
        res.json({ success: false, message: "No user found" })
    })
}

exports.currentUserInfo = function (req, res) {
    if (!req.isAuthorized)
        return common.unauthorized(res);

    res.json(req.user);
}