/*
webpack-dev-middleware是一个处理静态资源的middleware。
前面说的webpack-dev-server，实际上是一个小型Express服务器，
它也是用webpack-dev-middleware来处理webpack编译后的输出。

webpack-hot-middleware是一个结合webpack-dev-middleware使用的middleware，
它可以实现浏览器的无刷新更新（hot reload）。
这也是webpack文档里常说的HMR（Hot Module Replacement）。
 */
var webpack = require('webpack');
//This is an exact copy of the NodeJS ’path’ module published to the NPM registry.
var path = require('path');

/*
还有一个要点是publicPath不是/这样的值，而是http://localhost:3000/这样的绝对地址。
这是因为，在使用?sourceMap的时候，style-loader会把css的引入做成这样：
这种blob的形式可能会使得css里的url()引用的图片失效，因此建议用带http的绝对地址（这也只有开发环境会用到）
访问路径
 */
var publicPath = 'http://localhost:3000/';
/*
  hotMiddlewareScript的值是webpack-hot-middleware/client?reload=true，
  其中?后的内容相当于为webpack-hot-middleware设置参数，
  这里reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。
 */
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
  /*
    每一个entry后都增加一个hotMiddlewareScript。
   */
    entry: {
        page1: ['./client/page1', hotMiddlewareScript],
        page2: ['./client/page2', hotMiddlewareScript]
    },
    // 输出文件夹
    output: {
        filename: './[name]/bundle.js',
        // 路径，path解决路径问题 .resolve() 合并二者路径
        path: path.resolve('./public'),
        publicPath: publicPath
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        }]
    },
    /*
      webpack-hot-middleware有关的有两处。
      一是plugins的位置，增加3个插件，二是entry的位置，
      每一个entry后都增加一个hotMiddlewareScript。
     */
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;
