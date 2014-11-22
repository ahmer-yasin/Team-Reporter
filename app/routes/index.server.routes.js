/**
 * Created by AHMER on 11/21/2014.
 */
module.exports = function(app){
    var index = require('../controllers/index.server.controller')
    app.get('/',index.render);

}