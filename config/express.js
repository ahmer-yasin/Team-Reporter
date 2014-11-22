/**
 * Created by AHMER on 11/21/2014.
 */
/*the enviroment of work development is default is set*/
    process.env.NODE_ENV = process.env.NODE_ENV||'development';

var config = require('./config')
var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    compress = require('compression'),
    bodyparser =require('body-parser'),
    methodOverride = require('method-override');
    session = require('express-session')
    dbConn = require('../app/DB/connection');

module.exports = function() {
    var app = express();
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        app.use(compress())
    }
    app.use(bodyparser.urlencoded({
        extend : true
    }))
    app.use(bodyparser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized:true,
        resave:true,
        secret:config.sessionSecret
    }))


    app.set('views','./app/views');
    app.set('view engine','ejs');
    require('../app/routes/index.server.routes')(app);
    require('../app/routes/user.signUp.routes')(app);
    require('../app/routes/user.signIn.routes')(app);
    require('../app/routes/create.team.routes')(app);
    app.use(express.static(path.join(__dirname, '../public')));

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });



    return app;
}