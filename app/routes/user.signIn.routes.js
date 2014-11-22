/**
 * Created by AHMER on 11/21/2014.
 */
module.exports = function(app){
    var signIn = require('../controllers/user.server.signin')
    app.post('/signin',signIn.signIn);

}