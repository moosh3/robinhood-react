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

  // Entry point for bundle
  entry: {
    './src/index.js',
    'webpack-hot-middleware/client'
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
        test: /\.jsx?$/, // Match both .js and .jsx files
        include: [
          path.resolve(__dirname, './src/components'),
          path.resolve(__dirname, './src/index.js'),
        ],
        exclude: /node_modules/,
        loader: "babel",
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
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config;
