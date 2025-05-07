import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Import the Home.vue component

const routes = [
  { path: '/', component: Home },  // This will make Home.vue the default view when you visit the root URL
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
