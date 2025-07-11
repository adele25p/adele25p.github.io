<script setup>
// Import Vue Router components
import { RouterView } from 'vue-router'

// Import layout components
import AppHeader from './layouts/AppHeader.vue'
import AppFooter from './layouts/AppFooter.vue'
</script>

<template>
  <!-- Header component for navigation -->
  <AppHeader />
  <!-- Main content area for routing views -->
  <RouterView />
  <!-- Footer component for additional information -->
  <AppFooter />
</template>
