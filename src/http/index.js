/**
 * Created: leezii
 * Date: 2017/11/8
 * Time: 16:38
 */
import axios from 'axios'

//请求拦截
axios.interceptors.request.use(config => {
  config.headers['token'] = sessionStorage.getItem('token') || ''
  return config
}, error => {
  return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

export const http = {
  install: function (Vue) {
    Vue.prototype.$axios = axios
  }
}
