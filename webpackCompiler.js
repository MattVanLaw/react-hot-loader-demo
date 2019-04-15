const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackCompiler = webpack(webpackConfig);

module.exports = webpackCompiler
