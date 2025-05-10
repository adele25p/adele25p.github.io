// Import Vue Router and views for routing
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Define routes for the application
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Home route
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // About route with lazy loading
      path: '/about',
      name: 'about',
      // Route level code-splitting
      // This generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
