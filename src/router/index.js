import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue' // Import the Dashboard component
import Deals from '../views/Deals.vue'
import Listings from '../views/Listings.vue'




const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/deals', component: Deals },
  { path: '/listings', component: Listings },



   // Add route for Dashboard page
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
