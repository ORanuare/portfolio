import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    }
  ]
})

export default router
