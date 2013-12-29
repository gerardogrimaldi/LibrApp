var everyauth = require('everyauth');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');

mongoose.connect('mongodb://librapp:%#L1br4pp#%@ds047198.mongolab.com:47198/librapp');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/user', user.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});