/**
 * Created by AHMER on 11/21/2014.
 */
module.exports = function(app){
    var signUp = require('../controllers/user.server.signup')
    app.post('/signup',signUp.signUP);

}