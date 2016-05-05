'use strict';

var express = require('express');
var AV = require('leanengine');
var path = require('path');

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);
// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();

var app = require('./server/app');

app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;

var isDev = process.env.NODE_ENV === 'dev';
//for dev
if(isDev){
  var webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      webpackDevConfig = require('./webpack.config.js');

  var compiler = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiler, {

      // public path should be the same with webpack config
      publicPath: webpackDevConfig.output.publicPath,
      noInfo: true,
      stats: {
          colors: true
      }
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.join(__dirname, './public')))
  // add "reload" to express, see: https://www.npmjs.com/package/reload
  var reload = require('reload');
  var http = require('http');

  var server = http.createServer(app);
  reload(server, app);

  server.listen(3000, function(){
      console.log('App (dev) is now running on port 3000!');
  });

} else {
  app.use(express.static(path.join(__dirname, './public')))
  var PORT = parseInt(process.env.LC_APP_PORT || 3000);
  app.listen(PORT, function () {
    console.log(process.env.NODE_ENV);
    console.log('Node app is running, port:', PORT);
  });
}

//dev end

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。