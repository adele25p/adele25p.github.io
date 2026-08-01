// Router configuration for the application
// This file sets up the Vue Router for the application, defining routes, lazy loading components, and scroll behavior.

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
      , component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy loading: the component is loaded only when this route is visited
      // This approach optimizes performance by reducing the initial bundle size
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
  // Scroll behavior: this function is called when navigating to a new route
  // It ensures that the page scrolls to the top when a new route is visited
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router