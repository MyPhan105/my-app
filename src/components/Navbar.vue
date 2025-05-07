<template>
  <nav class="navbar">
    <div class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</template>

<script setup>
const emit = defineEmits()

const toggleMenu = () => {
  // Emit an event to App.vue to toggle sidebar visibility
  emit('toggleSidebar')
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #e87722; /* RealNex Orange */
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}
</style>
