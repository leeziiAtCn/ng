/**
 * Created: leezii
 * Date: 2017/12/15
 * Time: 15:04
 */
const path = require('path')
module.exports = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.join(__dirname, '../src'),
  },
  extensions: ['.js', '.vue']
}
