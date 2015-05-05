
/**
 * Module dependencies.
 */

var express = require('express');
var controller = require('./controller');
var user = require('./controller/user') ();
var product = require('./controller/product') ();
var http = require('http');
var path = require('path');
var mongoose=require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect("mongodb://localhost/shopping");

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/',user.ll);

//app.post('/users/',user.index);
app.post('/register', user.create);
app.post('/login',user.login);
//app.get('/users/:id',user.showproduct);
app.get('/admin',user.index);
app.get('/user',user.userlogin);
app.post('/products',product.create);
app.get('/products',product.listprod);
app.put('/products/user/:id',product.updateuseritem);
app.get('/products/:id',product.eproduct);
app.put('/products/:id',product.updateproduct);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
