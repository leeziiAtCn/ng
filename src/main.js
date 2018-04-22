/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:40
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { utils } from '@/utils'
import { http } from '@/http'
import router from '@/router'
import { store } from '@/store'
import ElementUI from 'element-ui'

import '@/less/base.less'

Vue.use(ElementUI)
Vue.use(utils)
Vue.use(http)
Vue.use(VueRouter)

export const app = new Vue({
  el: '#app',
  router,
  store
})
if (window.console) {
  console.log(`%c You are running in ${CUR_ENV.env} environment,
  The last build-time is at ${Vue.prototype.$utils.toTimeFormat(
    CUR_ENV.buildTime,
    'yyyy-MM-dd hh:mm:ss')}`, 'color:#0E88EB;font-size:18px;')
}
