import Vue from 'vue'
import App from './App.vue'
import 'less/base.less'
import axios from 'javascript/http'
import 'babel-polyfill'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App)
})