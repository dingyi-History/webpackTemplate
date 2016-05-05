//https://github.com/ericdum/mujiang.info/issues/6/
/*
1
 */

{
  "name": "webpack1",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "dev": "webpack-dev-server --inline --hot",
    "build": "webpack -p"
  },
  "author": "",
  "license": "ISC"
}

/*
2
 */
 {
   "name": "express-webpack-full-live-reload-example",
   "version": "1.0.0",
   "description": "A workflow with full live reload for webpack&express application.",
   "repository": {
     "type": "git",
     "url": "https://github.com/kenanpengyou/express-webpack-full-live-reload-example.git"
   },
   "author": "liangzhu",
   "main": "app.js",
   "scripts": {
     "start": "cross-env NODE_ENV=dev supervisor -i client app",
     "browsersync": "cross-env NODE_ENV=dev node app_browsersync",
     "build": "webpack",
     "production": "webpack --config webpack.production.config.js -p & cross-env NODE_ENV=production node app"
   },
   "license": "MIT",
   "dependencies": {
     "consolidate": "^0.14.0",
     "ejs": "^2.4.1",
     "express": "^4.13.4"
   },
   "devDependencies": {
     "browser-sync": "^2.11.1",
     "chokidar": "^1.4.2",
     "cross-env": "^1.0.7",
     "css-loader": "^0.23.1",
     "extract-text-webpack-plugin": "^1.0.1",
     "file-loader": "^0.8.5",
     "node-sass": "^3.4.2",
     "npm-install-webpack-plugin": "^2.0.2",
     "reload": "^0.7.0",
     "resolve-url-loader": "^1.4.3",
     "sass-loader": "^3.1.2",
     "style-loader": "^0.13.0",
     "url-loader": "^0.5.7",
     "webpack": "^1.12.12",
     "webpack-dev-middleware": "^1.5.1",
     "webpack-hot-middleware": "^2.7.1"
   }
 }


/*
3
 */
 {
   "name": "vue2",
   "version": "1.0.0",
   "description": "A Vue.js project",
   "author": "丁一鸣 <315129552@qq.com>",
   "private": true,
   "scripts": {
     "dev": "node build/dev-server.js",
     "build": "node build/build.js",
     "test": ""
   },
   "dependencies": {
     "babel-runtime": "^5.8.0",
     "purecss": "^0.6.0",
     "vue": "^1.0.18",
     "vue-router": "^0.7.13",
     "vuex": "^0.6.2"
   },
   "devDependencies": {
     "babel-core": "^6.0.0",
     "babel-loader": "^6.0.0",
     "babel-plugin-transform-runtime": "^6.0.0",
     "babel-preset-es2015": "^6.0.0",
     "babel-preset-stage-2": "^6.0.0",
     "connect-history-api-fallback": "^1.1.0",
     "css-loader": "^0.23.0",
     "eventsource-polyfill": "^0.9.6",
     "express": "^4.13.3",
     "extract-text-webpack-plugin": "^1.0.1",
     "file-loader": "^0.8.4",
     "function-bind": "^1.0.2",
     "html-webpack-plugin": "^2.8.1",
     "http-proxy-middleware": "^0.12.0",
     "json-loader": "^0.5.4",
     "node-sass": "^3.6.0",
     "ora": "^0.2.0",
     "sass-loader": "^3.2.0",
     "shelljs": "^0.6.0",
     "url-loader": "^0.5.7",
     "vue-hot-reload-api": "^1.2.0",
     "vue-html-loader": "^1.0.0",
     "vue-loader": "^8.2.1",
     "vue-style-loader": "^1.0.0",
     "vuex-router-sync": "^1.0.0",
     "webpack": "^1.12.2",
     "webpack-dev-middleware": "^1.4.0",
     "webpack-hot-middleware": "^2.6.0",
     "webpack-merge": "^0.8.3"
   }
 }

/*
4
 */
 {
   "name": "vue5",
   "description": "A Vue.js project",
   "author": "丁一鸣 &lt;315129552@qq.com&gt;",
   "private": true,
   "scripts": {
     "dev": "webpack-dev-server --inline --hot",
     "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
   },
   "dependencies": {
     "vue": "^1.0.0",
     "babel-runtime": "^6.0.0"
   },
   "devDependencies": {
     "babel-core": "^6.0.0",
     "babel-loader": "^6.0.0",
     "babel-plugin-transform-runtime": "^6.0.0",
     "babel-preset-es2015": "^6.0.0",
     "babel-preset-stage-2": "^6.0.0",
     "cross-env": "^1.0.6",
     "css-loader": "^0.23.0",
     "file-loader": "^0.8.4",
     "json-loader": "^0.5.4",
     "url-loader": "^0.5.7",
     "vue-hot-reload-api": "^1.2.0",
     "vue-html-loader": "^1.0.0",
     "vue-loader": "^8.2.1",
     "vue-style-loader": "^1.0.0",
     "webpack": "^1.12.2",
     "webpack-dev-server": "^1.12.0"
   }
 }
/*
5
 */
 {
   "name": "meetup",
   "version": "1.0.0",
   "description": "meetup.xitu.io",
   "author": "Awe",
   "main": "app.js",
   "scripts": {
     "dev": "cross-env NODE_ENV=dev supervisor -i vue,node_modules server",
     "build": "webpack --config webpack.production.config.js -p",
     "start": "node server.js"
   },
   "dependencies": {
     "avoscloud-sdk": "^0.6.9",
     "body-parser": "^1.13.3",
     "consolidate": "^0.14.0",
     "express": "^4.13.4",
     "leanengine": "^0.4.0",
     "moment": "^2.12.0",
     "pangu": "^3.0.0",
     "request-promise": "^0.4.3",
     "vue": "^1.0.17",
     "promise": "^7.1.1",
     "bcrypt-nodejs": "0.0.3",
     "cheerio": "^0.19.0",
     "compute-erf": "^3.0.3",
     "express-session": "^1.11.3",
     "jade": "^1.11.0",
     "js-beautify": "^1.5.10",
     "passport": "^0.3.0",
     "passport-local": "^1.0.0",
     "readability-api": "^0.4.0",
     "underscore": "^1.8.3",
     "url-join": "0.0.1",
     "xss": "^0.2.7"
   },
   "devDependencies": {
     "autoprefixer": "^6.3.6",
     "babel-code-frame": "^6.3.13",
     "babel-core": "^6.2.1",
     "babel-loader": "^6.2.4",
     "babel-plugin-add-module-exports": "^0.1.1",
     "babel-plugin-transform-es2015-computed-properties": "^6.3.13",
     "babel-plugin-transform-es2015-modules-commonjs": "^6.3.16",
     "babel-plugin-transform-runtime": "^6.6.0",
     "babel-polyfill": "^6.2.0",
     "babel-preset-es2015": "^6.6.0",
     "babel-preset-stage-2": "^6.1.18",
     "babel-runtime": "^5.8.35",
     "chokidar": "^1.4.2",
     "cross-env": "^1.0.7",
     "css-loader": "^0.23.1",
     "extract-text-webpack-plugin": "^1.0.1",
     "file-loader": "^0.8.5",
     "jade": "^1.11.0",
     "node-bourbon": "^4.2.3",
     "node-sass": "^3.4.2",
     "npm-install-webpack-plugin": "^2.0.2",
     "postcss": "^5.0.19",
     "reload": "^0.7.0",
     "resolve-url-loader": "^1.4.3",
     "sass-loader": "^3.1.2",
     "scroll-to-element": "^2.0.0",
     "style-loader": "^0.13.0",
     "url-loader": "^0.5.7",
     "vue-hot-reload-api": "^1.3.2",
     "vue-html-loader": "^1.2.0",
     "vue-lazyload": "^0.3.9",
     "vue-loader": "^8.2.0",
     "vue-resource": "^0.7.0",
     "vue-router": "^0.7.11",
     "vue-slide": "^1.0.2",
     "vue-style-loader": "^1.0.0",
     "webpack": "^1.12.12",
     "webpack-dev-middleware": "^1.5.1",
     "webpack-hot-middleware": "^2.7.1"
   }
 }

/*
6
 */
 {
   "name": "vuelean",
   "description": "vue and leanCloud Template",
   "author": "",
   "private": true,
   "scripts": {
     "dev": "cross-env NODE_ENV=dev supervisor -i vue,node_modules server",
     "build": "webpack --config webpack.prod.config.js -p"
   },
   "dependencies": {
     "avoscloud-sdk": "^0.6.10",
     "ejs": "^2.4.1",
     "express": "^4.13.4",
     "leanengine": "^0.4.0",
     "purecss": "^0.6.0"
   },
   "devDependencies": {
     "babel-core": "^6.0.0",
     "babel-loader": "^6.0.0",
     "babel-plugin-transform-runtime": "^6.0.0",
     "babel-preset-es2015": "^6.0.0",
     "babel-preset-stage-2": "^6.0.0",
     "babel-runtime": "^5.8.0",
     "chokidar": "^1.4.3",
     "cross-env": "^1.0.6",
     "css-loader": "^0.23.0",
     "file-loader": "^0.8.4",
     "json-loader": "^0.5.4",
     "reload": "^0.7.0",
     "url-loader": "^0.5.7",
     "vue": "^1.0.21",
     "vue-hot-reload-api": "^1.2.0",
     "vue-html-loader": "^1.0.0",
     "vue-loader": "^8.2.1",
     "vue-router": "^0.7.13",
     "vue-style-loader": "^1.0.0",
     "vuex": "^0.6.3",
     "vuex-router-sync": "^1.0.0",
     "webpack": "^1.12.2",
     "webpack-dev-middleware": "^1.6.1",
     "webpack-hot-middleware": "^2.10.0"
   }
 }
