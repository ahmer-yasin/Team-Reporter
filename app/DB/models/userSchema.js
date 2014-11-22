var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String,
    myTeams:[{type:Schema.ObjectId,ref:'Team',default:[]}],
    memberOf:[{type:Schema.ObjectId,ref:'Team',default:[]}]
});

module.exports = mongoose.model('User',UserSchema);