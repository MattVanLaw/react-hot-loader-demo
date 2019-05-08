var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    './frontend/index.js'
  ],
  output: {
    filename: 'bundle.js',
    // 'path' below appears to only matter for generating a physical bundle file
    // for production; in development, bundle  is in memory and somehow
    // always fetchable from localhost:PORT/bundle.js
    path: path.resolve(__dirname, 'frontend')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-react'],
        }
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
