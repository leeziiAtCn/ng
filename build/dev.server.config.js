/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:06
 */
const utils = require('./webpack.utils')

module.exports = {
  historyApiFallback: true,
  stats: 'minimal',
  noInfo: false,
  compress: true,
  host: utils.ip,
  port: 8086,
  disableHostCheck: true,
  proxy: {
    '*': {
     target: 'http://www.wsxht.com',
      changeOrigin: true,
      secure: false
    }
  }
}
