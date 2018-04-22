/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:10
 */
const path = require('path')
module.exports = {
  filename: 'javascript/[name][hash:4].[name].js',
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/'
}