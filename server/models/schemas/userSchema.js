var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: { type: String },
    firstName: { type: String },
    lastName: {type: String },
    passwordHash: { type: String },
    passwordSalt: { type: String }
});

module.exports = mongoose.model('user', answerSchema);