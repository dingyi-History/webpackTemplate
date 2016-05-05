var express = require('express'),
    path = require('path'),
    consolidate = require('consolidate');

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var port = 3000;

app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', path.resolve('./server/views'));

// local variables for all views
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;

if (isDev) {

// 这段代码应该位于Express的routes代码之前。其中，webpack-dev-middleware配置的publicPath应该和webpack配置文件里的一致。
    // static assets served by webpack-dev-middleware & webpack-hot-middleware for development
    var webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        webpackDevConfig = require('./webpack.config.js');

    var compiler = webpack(webpackDevConfig);

    // attach to the compiler & the server
    app.use(webpackDevMiddleware(compiler, {

        // public path should be the same with webpack config
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));

    require('./server/routes')(app);
// 把会重启的服务器和浏览器关联起来
    // add "reload" to express, see: https://www.npmjs.com/package/reload
    var reload = require('reload');
    var http = require('http');

    var server = http.createServer(app);
    reload(server, app);
// Express启动文件的最后一般是app.listen()。参照reload的说明，需要这样用http再增加一层服务。
// 然后，再到Express的视图文件views里，在底部增加一个<script>：
// <% if (env !== "production") { %>     <script src="/reload/reload.js"></script><% } %>
// 所有的views都需要这样一段代码，因此最好借助模板引擎用include或extends的方式添加到公共位置。
// 这里的reload.js和前面webpack的开发环境bundle.js并不冲突，它们一个负责前端源文件变更后进行编译和刷新，另一个负责在服务器发生重启时触发延时刷新。
    server.listen(port, function(){
        console.log('App (dev) is now running on port 3000!');
    });
    /*
client部分的目标就完成了。
现在到网页里打开控制台，应该可以看到[HMR] connected的提示。
这个项目中我只要求css使用HMR，
如果你希望javascript也使用HMR，一个简单的做法是在entry文件内添加以下代码：
     */
    if(module.hot) {
        module.hot.accept();
    }
} else {

  //webpack-dev-middleware和webpack-hot-middleware的静态资源服务只用于开发环境。到了线上环境，应该使用express.static()。
  // __dirname 指当前目录
    // static assets served by express.static() for production
    app.use(express.static(path.join(__dirname, 'public')));
    require('./server/routes')(app);
    app.listen(port, function () {
        console.log('App (production) is now running on port 3000!');
    });
}
