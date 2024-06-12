import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/MovieList',
      name: 'list',
      component: () => import('../views/MovieList.vue')
    },
    {
      path: '/AddMovie',
      name: 'add',
      component: () => import('../views/AddMovie.vue')
    }
  ]
})

export default router
