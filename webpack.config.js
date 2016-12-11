 /* eslint-disable global-require */

const debug = process.env.NODE_ENV !== "production";

const path = require('path');
const webpack = require('webpack');

var mainPath = path.resolve(__dirname, 'src', 'index.js');

const config = {
  // Entry point for bundle
  entry: [
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',
    // Our application
    mainPath
  ],
  // Options affecting output of bundle
  output: {
    path: path.resolve(__dirname, 'src', 'static', 'js')
    filename: 'bundle.js',
    publicPath: '/js/'
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
