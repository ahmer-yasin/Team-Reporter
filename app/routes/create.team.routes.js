/**
 * Created by AHMER on 11/22/2014.
 */
module.exports = function(app){
    var create = require('../controllers/team.create.controller')
    app.post('/createTeam',create.createTeam);

}