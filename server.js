/**
 * Created by AHMER on 11/20/2014.
 */
var express = require('./config/express');
var app =  express();

app.listen(3000)
module.exports = app;
console.log("server is running at http://localhost:3000");