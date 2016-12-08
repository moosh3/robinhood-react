 /* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');


var WebpackDevServer = require("webpack-dev-server");
var WebpackDevServerConfig = new WebpackDevServer({
  contentBase: __dirname + 'dist',
});

var mainPath = path.resolve(__dirname + 'src', 'index.js');
var buildPath = path.resolve(__dirname, 'public', 'build');

const config = {
  // Base directory for entry option
  context: __dirname,
  // Entry point for bundle
  entry: [
    // For hot style updates
    'webpack/hot/dev-server',
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',
    // Our application
    mainPath
  ],
  // Options affecting output of bundle
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    new Webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;
