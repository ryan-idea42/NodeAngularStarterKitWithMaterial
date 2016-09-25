var userSchema = require('../../models/schemas/userSchema');
var user = require('../../models/user');
var common = require('../common');

exports.getByName = function (req, res) {
    if (!req.isAuthorized)
        return common.unauthorized(res);

    userSchema.findOne({ userName: req.params.userName }).exec(function (err, user) {
        res.json(user);
    })
}

exports.createUser = function (req, res) {
    if (!req.isAuthorized)
        return common.unauthorized(res);

    var newUser = new user(req.body);
    newUser.hashPassword(req.body.password);

    userSchema.create(newUser).then(function (success) {
        res.json(success.Id);
    }, function (error) {
        res.json(error);
    });
}