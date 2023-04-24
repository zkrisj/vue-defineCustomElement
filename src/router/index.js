import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Jsx from '../components/Jsx.vue'
import Jsx2 from '../components/Jsx2.vue'
import Jsx3 from '../components/Jsx3.vue'

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
      path: '/jsx2',
      name: 'jsx2',
      component: Jsx2
    },
    {
      path: '/jsx3',
      name: 'jsx3',
      component: Jsx3
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
