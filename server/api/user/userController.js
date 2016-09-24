var userSchema = require('../../models/schemas/userSchema');
var user = require('../../models/user');

exports.getById = function(req, res) {
	userSchema.findOne({Id: req.id}).then(function(success){
        res.json(sucess);
    }, function(error){
        res.json(error);
    })
}

exports.createUser = function(req, res) {
    var newUser = new user(req.body);
    newUser.hashPassword(req.body.password);

    userSchema.create(newUser).then(function(success){
        res.json(success.Id);
    }, function(error){
        res.json(error);
    });
}