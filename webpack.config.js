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


const config = {

  // Base directory for entry option
  context: __dirname,

  noParse: [
    './src/assets/js/',
  ]

  // Entry point for bundle
  entry: {
    main: ['./src/main.js'],
  },

  // Options affecting output of bundle
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'app',
  },

  // Options affecting normal modules
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
