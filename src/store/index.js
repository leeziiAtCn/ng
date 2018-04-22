/**
 * Created: leezii
 * Date: 2017/12/12
 * Time: 14:12
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const state = {
  domain: '',
  perfix: 'https://oddnhrkuu.qnssl.com/'
}
const mutations = {

}
const getters = {

}
export const store = new Vuex.Store({
  state,
  mutations,
  getters
})
