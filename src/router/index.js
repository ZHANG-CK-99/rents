import Vue from 'vue'
import VueRouter from 'vue-router'

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
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'look',
        name: 'look',
        component: () => import('@/views/look')
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/info')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/city')
  }
]

const router = new VueRouter({
  routes
})

export default router
