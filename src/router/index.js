import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Jsx from '../components/Jsx.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: Jsx
    },
    {
      path: '/components',
      name: 'components',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Example.ce.vue')
    }
  ]
})

export default router
