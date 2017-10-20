import Vue from 'vue';

import VueRouter from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import Library from './library';
import Home from './pages/Home.vue';

import { mixin as onClickOutside } from 'vue-on-click-outside'

Vue.mixin(onClickOutside);

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Library);

const routes = [{
    name: 'Home',
    path: '/',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');