const environment = require('./environment.config.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'javascript/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: 'vue-style-loader!css-loader!less-loader'
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 80
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    // new webpack.DefinePlugin({'process.env': 'dev'}),
    new HtmlWebpackPlugin({
      title: 'leezii-template',
      template: './index.html'
    })
  ]
}