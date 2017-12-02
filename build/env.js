/**
 * Created: leezii
 * Date: 2017/10/30
 * Time: 12:17
 */
module.exports = {
  development: {
    env: 'development',
    buildTime: +new Date(),
    upload: 'https://upload.qbox.me'
  },
  production: {
    env: 'production',
    buildTime: +new Date(),
    upload: 'https://upload.qbox.me'
  }
}