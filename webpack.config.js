/**
 * Webpack Boilerplate
 * https://github.com/aleccunningham/reactjs-webpack
 *
 * Copyright 2016 Marjoram Digital
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var WebpackDevServer = require("webpack-dev-server");
var WebpackDevServerConfig = new WebpackDevServer({
  contentBase: __dirname + 'dist',
})

const config = {

  // Base directory for entry option
  context: __dirname,

  // Entry point for bundle
  entry: {
    main: ['./src/main.js'],
  },

  // Options affecting output of bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  // Options affecting normal modules
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  // Third party loaders and plugins
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
  ]
}

module.exports = config;
