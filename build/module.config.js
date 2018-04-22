/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:01
 */
const CUR_ENV = require('./env.params')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: isBundle,
        postcss: true
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.less|\.css/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!less-loader'
      })
    }
  ]
}