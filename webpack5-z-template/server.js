var app = require('./app')
var express = require('express')
var path = require('path')

var AV = require('leanengine');

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);
AV.Cloud.useMasterKey();

// local variables for all views
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;

var isDev = process.env.NODE_ENV === 'dev';
var PORT = parseInt(process.env.LC_APP_PORT || 80);

if (isDev) {
    // static assets served by webpack-dev-middleware & webpack-hot-middleware for development
    var webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        webpackDevConfig = require('./webpack.config.js');

    var compiler = webpack(webpackDevConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    }));

    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.join(__dirname, 'public')));

    // https://www.npmjs.com/package/reload
    var reload = require('reload');
    var http = require('http');

    var server = http.createServer(app);
    reload(server, app);

    server.listen(PORT, '0.0.0.0');
    console.log('Meetup (development) is now running on port '+ PORT);
} else {
    app.use(express.static(path.join(__dirname, 'public')));
    app.listen(PORT, function () {
        console.log('Meetup (production) is now running on port '+ PORT);
    });
}
