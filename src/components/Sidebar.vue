<template>
    <div :class="['sidebar', { visible: isVisible }]">
      <ul class="sidebar-list">
        <li><router-link to="/" class="sidebar-link">Home</router-link></li> <!-- Home link -->
        <li><router-link to="/dashboard" class="sidebar-link">Dashboard</router-link></li>        
        <li><router-link to="/deals" class="sidebar-link">Deals</router-link></li>
        <li><router-link to="/listings" class="sidebar-link">Listings</router-link></li>
        <li><router-link to="/clients" class="sidebar-link">Clients</router-link></li>
        <li><router-link to="/calendar" class="sidebar-link">Calendar</router-link></li>
        <li><router-link to="/contacts" class="sidebar-link">Contacts</router-link></li>
        <li>Project</li>
        <li>Setting</li>
        <li>Support</li>
        <li>Logout</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { watch } from 'vue'
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true,
    },
  })
  
  watch(() => props.isVisible, (newValue) => {
    if (newValue) {
      // Optional: Add a delay for the sidebar to complete sliding in
      setTimeout(() => {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
      }, 300)
    } else {
      document.body.style.overflow = ''; // Allow scrolling when sidebar is closed
    }
  })
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px; /* Initially hidden off-screen */
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    padding-top: 60px;
    transition: left 0.3s ease-in-out; /* Smooth transition */
    z-index: 999;
  }
  
  .sidebar.visible {
    left: 0; /* Slide in when visible */
  }
  
  .sidebar-list {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar-list li {
    padding: 15px 25px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .sidebar-list li:hover {
    background-color: #e87722; /* RealNex Orange */
  }

  .sidebar-link {
  color: white; /* Change link color to white */
  text-decoration: none; /* Remove underline */
  display: block;
  padding: 10px 0;
}

  </style>
  