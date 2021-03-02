import Vue from 'vue'
import VueRouter from 'vue-router'
import edit_container from '../views/edit_container.vue';
import show_container from '../views/show_container.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'edit_container',
    component: edit_container
  },
  {
    path: '/show',
    name: 'show',
    component: show_container
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
