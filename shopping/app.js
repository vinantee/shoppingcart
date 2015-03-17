
/**
 * Module dependencies.
 */

var express = require('express');
var controller = require('./controller');
var user = require('./controller/user') ();
var http = require('http');
var path = require('path');
var mongoose=require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect("mongodb://localhost/shopping");

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//app.get('/login',user.ll);
app.get('/',user.ll);
app.get('/users',user.index);
app.post('/users', user.create);
app.get('/users/:login',user.login);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});