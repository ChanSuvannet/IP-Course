import PageData from '@/components/PageData.vue'; // PageData component
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/page/:id', 
      name: 'page',      
      component: PageData,
      props: true,    
    },
    {
      path: '/:catchAll(.*)', 
      redirect: '/page/1',
    },
  ],
});

export default router;
