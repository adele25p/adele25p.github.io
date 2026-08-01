<!--
  App.vue - Main application component
  This file defines the main structure of the application, including the layout components and routing views.
  It imports necessary components and sets up the template for rendering the application.
-->
  
<script setup>
import { RouterView } from 'vue-router'

import StatusBar from './components/layouts/TheStatusBar.vue'
import NavDesktop from './components/layouts/TheNavDesktop.vue'
import HeaderMobile from './components/layouts/TheHeaderMobile.vue'
import NavMobile from './components/layouts/TheNavMobile.vue'
import SiteFooter from './components/layouts/TheSiteFooter.vue'
</script>

<template>
  <div class="app-shell">
    <StatusBar class="status-bar" />

    <nav class="nav-desktop" aria-label="Main navigation">
      <NavDesktop />
    </nav>
    <nav class="nav-mobile" aria-label="Mobile navigation">
      <NavMobile />
    </nav>
    
    <header class="header-mobile">
      <HeaderMobile />
    </header>

    <main class="app-content">
      <RouterView />
    </main>

    <footer class="site-footer">
      <SiteFooter />
    </footer>
  </div>
</template>

<style scoped>
@reference './assets/style/base.css';

.nav-desktop {
  @apply hidden;
}

</style>
