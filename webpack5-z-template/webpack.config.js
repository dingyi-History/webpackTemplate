var webpack = require('webpack');
var path = require('path');
var bourbon = require('node-bourbon').includePaths;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = 'http://127.0.0.1/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        index: ['./vue/index/main.js', hotMiddlewareScript],
        detail: ['./vue/detail/main.js', hotMiddlewareScript],
        admin: ['./vue/admin/main.js', hotMiddlewareScript],
        application: ['./vue/application/main.js', hotMiddlewareScript]

    },
    output: {
        filename: './build/[name].js',
        path: path.resolve('./public'),
        publicPath: publicPath
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!sass?' + 'includePaths[]=' + bourbon)
            }]
    },
    vue: {
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("build/[name].css")
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
};

module.exports = devConfig;
