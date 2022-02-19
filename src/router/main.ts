import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import Home from '../views/Home.vue';
// @ts-ignore
import About from '../views/About.vue';
// @ts-ignore
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
