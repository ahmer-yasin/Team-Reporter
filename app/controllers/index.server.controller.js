/**
 * Created by AHMER on 11/21/2014.
 */
var express = require('../../config/express')
exports.render = function(req,res){
if(req.session.lastVisits){
    console.log(req.session.lastVisits)
    }
    req.session.lastVisits = new Date();
    res.sendfile('public/index.html');
}
