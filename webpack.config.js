const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let BUILD_DIR = path.resolve(__dirname, './build')
let APP_DIR = path.resolve(__dirname, './src/client')

const config = {
  mode: 'development',
  entry: {
    main: APP_DIR + '/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './src/server/public'
  },
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
}

module.exports = config