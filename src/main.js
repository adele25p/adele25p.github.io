// Import global styles
import './assets/main.css'

// Import Vue and main application components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create Vue application instance
const app = createApp(App)

// Use Vue Router for navigation
app.use(router)

// Mount the application to the DOM
app.mount('#app')
