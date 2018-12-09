var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
  mode: 'development',
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  devServer: {
    contentBase: './src/server/public'
  },
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
      {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'}
    ],

  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
};

module.exports = config;