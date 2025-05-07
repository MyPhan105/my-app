import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue' // Import the Dashboard component

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard }, // Add route for Dashboard page
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
