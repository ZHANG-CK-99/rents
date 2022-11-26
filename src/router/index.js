import Vue from 'vue'
import VueRouter from 'vue-router'
import childrenRouter from './childRouter'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: 'home',
    children: childrenRouter
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/city')
  },
  {
    path: '/map',
    component: () => import('@/views/map')
  },
  {
    path: '/detail',
    props: ({ query: { houseCode } }) => ({ houseCode }),
    component: () => import('@/views/detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
