import { createRouter, createWebHistory } from 'vue-router'

import AllProduct from '@/components/AllProduct.vue'
import HomeView from '@/components/HomeView.vue'
import PageHeader from '@/components/PageHeader.vue'
import ViewProduct from '@/components/ViewProduct.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/page',
      name: 'page',
      component: PageHeader
    },
    {
      path: '/all-product',
      name: 'all-product',
      component: AllProduct
    },
    {
      path: '/product/:id',
      name: 'view-product',
      component: ViewProduct
    }
  ]
})

export default router
