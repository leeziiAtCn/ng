/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:40
 */
import Vue from 'vue'
import routes from 'javascripts/router'
import VueRouter from 'vue-router'
import axios from 'javascripts/http'
import ElementUI from 'element-ui'

import 'less/base.less'
import {
  toTimeFormat
} from 'javascripts/utils'
Vue.prototype.$http = axios
const router = new VueRouter({
  routes
})
if (CUR_ENV.env !== 'development') {
  Vue.config.devtools = false
  Vue.config.silent = true
  Vue.config.productionTip = false
}
router.afterEach(route => {
  window.scrollTo(0, 0)
})

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router
})
if (window.console) {
  console.log(`%c You are running in ${CUR_ENV.env} environment,
  The last build-time is at ${toTimeFormat(CUR_ENV.buildTime,
    'yyyy-MM-dd hh:mm:ss')}`, 'color:#0E88EB;font-size:18px;')
}
