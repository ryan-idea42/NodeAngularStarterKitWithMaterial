var userSchema = require('../../models/schemas/userSchema');
var user = require('../../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

exports.authenticate = function (req, res) {
    userSchema.findOne({ userName: req.body.userName }).then(function (success) {
        var foundUser = new user(success);

        if (foundUser.passwordValid(req.body.password)) {
            var token = jwt.sign(foundUser, config.secrets.jwt, { expiresIn: config.expireTime });
            res.header('x-access-token' , token).json({success: true, message: "Success!"});
        }
    }, function (error) {
        res.json({ success: false, message: "No user found" })
    })
}