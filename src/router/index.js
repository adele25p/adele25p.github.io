// Import Vue Router and views for routing
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Set up of the router to manage navigation within the application
const router = createRouter({
  // Using HTML5 history mode for clean URLs
  history: createWebHistory(import.meta.env.BASE_URL),
  // Defining the application's routes
  routes: [
    {
      // Default route: this route is used when the user accesses the root of the site ('/')
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // "Projects" route: this route is used when the user accesses '/projects'
      path: '/projects',
      name: 'projects',
      // Lazy loading: the component is loaded only when this route is visited
      // This approach optimizes performance by reducing the initial bundle size
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      // "Documentation" route: this route is used when the user accesses '/documentation'
      path: '/documentation',
      name: 'documentation',
      component: () => import('../views/DocumentationView.vue'),
    },
    {
      // "About" route: this route is used when the user accesses '/about'
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// Exporting the router to be used in the main application
export default router
