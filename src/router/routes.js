export default [
  {
    path: '/auth',
    name: 'AuthPage',
    component: () => import('@/views/AuthPage.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
  },
  // {
  //   path: '/recommend',
  //   name: 'Recommend',
  //   component: () => import('@/views/Recommend/index.vue')
  // },
  // {
  //   path: '/discover',
  //   name: 'Discover',
  //   component: () => import('@/views/Discover/index.vue')
  // },
  // {
  //   path: '/forum',
  //   name: 'Forum',
  //   component: () => import('@/views/Forum/index.vue')
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('@/views/Profile/index.vue')
  // }
]
