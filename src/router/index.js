import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RecommendPage from '../views/RecommendPage.vue'
import DiscoverPage from '../views/DiscoverPage.vue'
import ForumPage from '../views/ForumPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: RecommendPage
  },
  {
    path: '/discover',
    name: 'Discover',
    component: DiscoverPage
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
