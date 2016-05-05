// Leancloud
var cloud           = require('./cloud');
var AV              = require('leanengine');

var express         = require('express');
var path            = require('path');
var consolidate     = require('consolidate');
var Promise         = require('promise');
var bodyParser      = require('body-parser');

var app = express();

// App Setup
app.set("view engine", "jade");
app.set('views', path.resolve('./server/views'));

app.use(cloud);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes/router')(app);

module.exports = app;
