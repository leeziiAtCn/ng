const environment = require('./env.config.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    filename: 'static/javascript/[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 80
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': path.join(__dirname, '../src/components'),
      'javascript': path.join(__dirname, '../src/static/javascript'),
      'less': path.join(__dirname, '../src/static/less'),
      'statics': path.join(__dirname, '../src/static')
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new ExtractTextPlugin('static/style/[name].css'),
    // new webpack.DefinePlugin({'process.env': 'dev'}),
    new HtmlWebpackPlugin({
      title: 'leezii-template',
      template: './index.html'
    }),
    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {
          warnings: false
        },
        sourceMap: false
      }
    ),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
  ]
}