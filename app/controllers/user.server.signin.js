/**
 * Created by AHMER on 11/21/2014.
 */
var db = require('mongoose')
var User = require('../DB/models/userSchema')
exports.signIn = function(req,res,next) {

    User.findOne({email:req.body.email}, function(err,data) {
        if(err){
        res.send(err)
        } else if(!data){
            res.send(err);
        }else{
            res.send(data);
        }
    })
}