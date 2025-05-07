import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue' // Import the Dashboard component
import Deals from '../views/Deals.vue'
import Listings from '../views/Listings.vue'
import Clients from '../views/Clients.vue'
import Calendar from '../views/Calendar.vue'
import Contacts from '../views/Contacts.vue'
import Projects from '../views/Projects.vue'
import Settings from '../views/Settings.vue'
import Support from '../views/Support.vue'
import Logout from '../views/Logout.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/deals', component: Deals },
  { path: '/listings', component: Listings },
  { path: '/clients', component: Clients },
  { path: '/calendar', component: Calendar },
  { path: '/contacts', component: Contacts },
  { path: '/projects', component: Projects },
  { path: '/settings', component: Settings },
  { path: '/support', component: Support },
  { path: '/logout', component: Logout },

   // Add route for Dashboard page
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
