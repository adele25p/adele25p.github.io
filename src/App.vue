<script setup>
// Import Vue Router components and HelloWorld component
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- Logo and navigation header -->
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- Display HelloWorld component with a message -->
      <HelloWorld msg="You did it!" />

      <!-- Navigation links -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <!-- Main content area for routing views -->
  <RouterView />
</template>

<style scoped>
/* Header styling */
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* Logo styling */
.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* Navigation styling */
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

/* Active link styling */
nav a.router-link-exact-active {
  color: var(--color-text);
}

/* Hover effect for active links */
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* General link styling */
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* Remove border for the first link */
nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* Header styling for larger screens */
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* Logo styling for larger screens */
  .logo {
    margin: 0 2rem 0 0;
  }

  /* Wrapper styling for larger screens */
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  /* Navigation styling for larger screens */
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
