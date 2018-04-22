/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:11
 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const CUR_ENV = require('./env.params')[process.env.NODE_ENV]

module.exports =  [
  new HtmlWebpackPlugin({
    favicon: './src/static/favicon.ico',
    filename: 'index.html',
    template: './src/static/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  }),
  new webpack.DefinePlugin({
    CUR_ENV: JSON.stringify(CUR_ENV)
  }),
  new ExtractTextPlugin('style/styles.css'),
  new HtmlWebpackIncludeAssetsPlugin({
    assets: [
      {
        path: '//at.alicdn.com/t/font_515100_9e752mgy39dx6r.css',
        type: 'css'
      },
      {
        path: '//unpkg.com/element-ui@2.2.1/lib/theme-chalk/index.css',
        type: 'css'
      },
      {
        path: '//unpkg.com/babel-polyfill@6.26.0/dist/polyfill.min.js',
        type: 'js'
      }
    ],
    append: false,
    publicPath: ''
  })
]
