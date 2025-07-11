<script setup>
// Import Vue Router components
import { RouterLink } from 'vue-router'

// Import composables
import useScreenSize from '../composables/useScreenSize.js'
import usePanel from '../composables/usePanel.js'
import useTheme from '../composables/useTheme.js'

// Import icons
import NavbarIcon from '../components/icons/IconNavbar.vue'
import HomeIcon from '../components/icons/IconHome.vue'
import ProjectsIcon from '../components/icons/IconProjects.vue'
import DocIcon from '../components/icons/IconDoc.vue'
import AboutIcon from '../components/icons/IconAbout.vue'
import SunIcon from '../components/icons/IconSun.vue'
import MoonIcon from '../components/icons/IconMoon.vue'

// Setup composables
const { isMobile } = useScreenSize()
const { isPanelOpen, togglePanel } = usePanel()
const { isDarkMode, toggleTheme } = useTheme()
</script>

<template>
  <header class="app-header">
    <!-- Mobile Panel Trigger -->
    <div class="panel-trigger" v-show="isMobile">
      <div class="navbar-toogle" @click="togglePanel">
        <NavbarIcon class="icon" />
      </div>
    </div>
    <!-- Navigation Section -->
    <nav class="navbar" v-show="isPanelOpen || !isMobile">
      <RouterLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">
        <HomeIcon class="icon" />
        <!--<span>Home</span>-->
      </RouterLink>
      <RouterLink to="/projects" class="nav-link" :class="{ active: $route.path === '/projects' }">
        <ProjectsIcon class="icon" />
        <!--<span>Projects</span>-->
      </RouterLink>
      <RouterLink
        to="/documentation"
        class="nav-link"
        :class="{ active: $route.path === '/documentation' }"
      >
        <DocIcon class="icon" />
        <!--<span>Documentation</span>-->
      </RouterLink>
      <RouterLink to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">
        <AboutIcon class="icon" />
        <!--<span>About</span>-->
      </RouterLink>
    </nav>
    <!-- Settings Section -->
    <div class="settings" v-show="isPanelOpen || !isMobile">
      <!-- Theme Toggle -->
      <div class="settings-toggle" @click="toggleTheme">
        <component :is="isDarkMode ? SunIcon : MoonIcon" class="icon" />
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s,
    color 0.3s;
}

.app-header {
  position: fixed;
  height: 100vh; /* Full height */
}

.navbar-icon,
.navbar,
.settings {
  margin: 1rem;
  padding: 1rem;
  gap: 1rem;
}

.navbar {
  align-items: start;
  justify-content: start;
  background-color: var(--color-background-soft);
  border-radius: 2rem;
}

.nav-link,
.settings-toggle {
  gap: 1rem;
  height: 2rem;
  color: var(--color-link);
}

.settings-toggle {
  position: absolute;
  bottom: 1rem;
}

.icon {
  height: 100%;
  fill: currentColor;
}
</style>
