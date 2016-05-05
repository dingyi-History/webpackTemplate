var path = require('path');
var webpack = require('webpack');
var path = require('path');
var bourbon = require('node-bourbon').includePaths;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = 'http://gold.xitu.io/';

var productionConfig = [{
    entry: {
        index: './vue/index/main.js',
        detail: './vue/detail/main.js',
        admin: './vue/admin/main.js',
        application: './vue/application/main.js'
    },
    output: {
        filename: './build/[name].js',
        path: path.resolve('./public'),
        publicPath: publicPath
    },
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
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?minimize!sass?' + 'includePaths[]=' + bourbon)
            }]
    },
    vue: {
        autoprefixer: {
            browsers: ['> 1%']
        }
    },
    plugins: [
        new ExtractTextPlugin("build/[name].css")
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}];

module.exports = productionConfig;
