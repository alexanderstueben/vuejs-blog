import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BlogsView from '@/views/BlogsView.vue';
import BlogView from '@/views/BlogView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/blogs/:id',
    name: 'blog',
    component: BlogView,
    props: true
  },
  {
    path: '/',
    redirect: '/home'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
