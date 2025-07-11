// This composable provides a reactive property `isMobile` that indicates whether the screen width is less than 1024 pixels.
// It also sets up event listeners to update this property on window resize events.

// This is useful for responsive design, allowing components to adapt based on the screen size.

import { ref, onMounted } from 'vue'

const isMobile = ref(false) // Default to false, will be updated in onMounted
let initialized = false // Flag to check if the component is already initialized

// Function to handle window resize events
const handleResize = () => {
  isMobile.value = window.innerWidth < 1024
}

// Function to initialize the isMobile property on component mount
// and set up event listeners for window resize events
const useIsMobile = () => {
  onMounted(() => {
    if (!initialized) {
      handleResize()

      // Listen for window resize events
      window.addEventListener('resize', handleResize)
      initialized = true // Set the flag to true to prevent re-initialization
    }
  })

  // Return the isMobile reactive reference
  return { isMobile }
}

// Export the useIsMobile function to be used in .vue files
export default useIsMobile
