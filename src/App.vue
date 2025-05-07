<template>
  <div id="app">
    <Navbar @toggleSidebar="toggleSidebar" />
    <Sidebar :isVisible="sidebarVisible" />
    <router-view /> <!-- This renders the current route's component -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const sidebarVisible = ref(false)

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  padding: 100px 20px 40px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  transition: margin-left 0.3s ease;
}
</style>
