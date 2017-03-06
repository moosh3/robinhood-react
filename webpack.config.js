 /* eslint-disable global-require */

const debug = process.env.NODE_ENV !== "production";

const path = require('path');
const webpack = require('webpack');
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'


var mainPath = path.resolve(__dirname, 'src', 'index.js');

const config = {
  // Entry point for bundle
  entry: [
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    // Our application
    mainPath
  ],
  // Options affecting output of bundle
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
    publicPath: `0.0.0.0:${WDS_PORT}/dist/js/`,
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
}

module.exports = config;
