import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

import Dashboard from '../components/Home/views/Dashboard.vue';
import Document from '../components/Home/views/Document.vue';
import Account from '../components/Home/views/Account.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Home,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'document',
        name: 'document',
        component: Document,
      },
      {
        path: 'account',
        name: 'account',
        component: Account,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
