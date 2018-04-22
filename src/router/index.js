import VueRouter from 'vue-router'

/**
 * Created: leezii
 * Date: 2017/10/24
 * Time: 10:50
 */
//  component: _ => import(/* webpackChunkName: "login" */ '@/pages/login'),

const routes = [
  {
    path: '/',
    component: require('@/layout/index'),
    redirect: '/login',
  },
  {
    path: '/login',
    component: require('@/pages/login')
  }
]
if (CUR_ENV.env === 'development') {
  routes.push({
    path: '/test',
    component: require('@/pages/test')
  })
}
export default new VueRouter({
  routes
})

