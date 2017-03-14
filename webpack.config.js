 /* eslint-disable global-require */

const debug = process.env.NODE_ENV !== "production";

const path = require('path');
const webpack = require('webpack');
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'


var mainPath = path.resolve(__dirname, 'client', 'index.js');

const config = {
  // Entry point for bundle
  entry: [
    // The script refreshing the browser on none hot updates
    'webpack-hot-middleware/client',
    // Our application
    mainPath
  ],
  // Options affecting output of bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  // Options affecting normal modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
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
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}

module.exports = config;
