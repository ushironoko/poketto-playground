import { createRouter, createWebHistory } from 'vue-router'
import Index from '~/views/index.vue'
import Sub from '~/views/sub.vue'

export const routerHistory = createWebHistory()

export const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/sub',
      name: 'sub',
      component: Sub,
    },
  ],
})
