import { createRouter, createWebHistory } from 'vue-router'
import Exercice1 from '../views/Exercice1.vue'
import Exercice2 from '../views/Exercice2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Exercice1
    },
    {
      path: '/exercice2',
      name: 'exercice2',
      component: Exercice2
    }
  ]
})

export default router
