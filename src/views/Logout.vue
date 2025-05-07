<template>
    <div class="logout-page">
      <h1>Logging Out...</h1>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  onMounted(() => {
    // Clear any stored auth data here if needed
    localStorage.clear()
    sessionStorage.clear()
    // Redirect to login or home page
    router.push('/')
  })
  </script>
  
  <style scoped>
  .logout-page {
    padding: 20px;
    text-align: center;
  }
  </style>
  