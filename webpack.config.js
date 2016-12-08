 /* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');

var mainPath = path.resolve(__dirname, 'index.js');

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
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
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
  ]
}

module.exports = config;
