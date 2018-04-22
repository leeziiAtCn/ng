const devtool = require('./dev.tool.config')
const modules = require('./module.config')
const resolve = require('./resolve.config')
const devServer = require('./dev.server.config')
const output = require('./output.config')
const entry = require('./entry.config')
const devPlugins = require('./base.plugins.config')
const prodPlugins = require('./prod.plugins.config')
const externals = require('./externals.config')
const CUR_ENV = require('./env.params')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'

process.noDeprecation = true
let config = {
  entry,
  output,
  module: modules,
  devtool,
  resolve,
  devServer,
  plugins: devPlugins
}
if (isBundle) {
  config.plugins = [...config.plugins, ...prodPlugins]
  config.externals = externals
}
module.exports = config