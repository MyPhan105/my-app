import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App) // Create Vue app instance
  .use(router)  // Use the router
  .mount('#app') // Mount the app to the DOM
