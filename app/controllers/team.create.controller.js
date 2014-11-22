/**
 * Created by AHMER on 11/22/2014.
 */
var db = require('mongoose')
var Team = require('../DB/models/teamsSchema')
var User = require('../DB/models/userSchema')
 exports.createTeam = function(req,res,next){
     var team = new Team({
         name:req.body.team,
         admin:req.body.admin
     });
     team.save(function(err,data){
         if(err){
             res.json(err);
         }
         else{
             var teamId = data._id;
             User.findById(req.body.admin,function(err,data){
                 if(err){
                     res.json(err);
                 }
                 else{
                     data.myTeams.push(teamId);
                     data.save(function(err,data){
                         if(err){
                             res.json(err);
                         }
                         else{
                             res.json(data);
                         }
                     });
                 }
             })
         }
     })
}


/*
 router.get('/createteam', function(req, res) {
 var team = new Team({
 name:'Team3',
 admin:'546c9542a1085d300c683c6d'
 });
 team.save(function(err,data){
 if(err){
 res.json(err);
 }
 else{
 var teamId = data._id;
 User.findById('546c9542a1085d300c683c6d').exec(function(err,data){
 if(err){
 res.json(err);
 }
 else{
 data.myTeams.push(teamId);
 data.save(function(err,data){
 if(err){
 res.json(err);
 }
 else{
 res.json(data);
 }
 });
 }
 })


 }
 })

 });

 router.get('/createUser', function(req, res) {
 var user = new User({
 email:'a@a.com',
 password:'123456',
 name:'Ishaq'
 });
 user.save(function(err,data){
 if(err){
 res.json(err);
 }
 else{
 res.json(data);
 }

 })
 });

 */