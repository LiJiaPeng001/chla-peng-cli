const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  },
  { path: '/:pathMatch(.*)*', redirect: { name: "index" } },
]

export default routes