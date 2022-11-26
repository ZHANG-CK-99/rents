const childrenRouter = [
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

export default childrenRouter
