/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 14:57
 */
const CUR_ENV = require('./env.params')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'

module.exports = isBundle ? false : '#cheap-module-eval-source-map'
