/**
 * Created by AHMER on 11/21/2014.
 */
var db = require('mongoose')
var User = require('../DB/models/userSchema')
exports.signUP = function(req,res){
    var user = new User(req.body);
    if(req.body){
        user.save(function(err,data){
            if(err){
            res.send(err)
                }else{
                res.send(user);
            }
        })
    }
}
