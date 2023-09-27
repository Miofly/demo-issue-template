import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue'),
    },
  ],
});

export default router;
