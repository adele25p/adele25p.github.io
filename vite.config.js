// Import necessary modules from Node.js and Vite
import { fileURLToPath, URL } from 'node:url'

// Import Vite's configuration function and plugins
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // Plugin for Vue.js support
import vueDevTools from 'vite-plugin-vue-devtools' // Plugin for Vue DevTools support

// Export the Vite configuration
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Enable Vue.js plugin
    vueDevTools(), // Enable Vue DevTools plugin
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias '@' to the './src' directory
    },
  },
})
