/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:14
 */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = [
  new CleanWebpackPlugin('dist', {
    root: path.resolve(__dirname, '../'),
    verbose: true,
    dry: false
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }),
  new UglifyJSPlugin(),
  new HtmlWebpackIncludeAssetsPlugin({
    assets: [
      {
        path: '//unpkg.com/vue@2.5.8/dist/vue.min.js',
        type: 'js'
      },
      {
        path: '//unpkg.com/element-ui@2.2.1/lib/index.js',
        type: 'js'
      },
      {
        path: '//cdn.bootcss.com/axios/0.16.2/axios.min.js',
        type: 'js'
      },
      {
        path: '//unpkg.com/vuex@3.0.1/dist/vuex.min.js',
        type: 'js'
      },
      {
        path: '//unpkg.com/vue-router@3.0.1/dist/vue-router.min.js',
        type: 'js'
      }
    ],
    append: false,
    publicPath: ''
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings: false,
      drop_debugger: true,
      drop_console: true
    }
  })
]
