var express =require('express');
var path = require('path');
var cloud = require('./cloud');

var app = express()

app.use(cloud);

app.set("view engine", "ejs");
app.set('views', path.resolve('./server/views'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/test', function (req, res) {
    res.send('xiadd');
})


module.exports = app
