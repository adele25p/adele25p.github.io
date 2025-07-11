// This composable provides a reactive property `isPanelOpen` that indicates whether a panel is open or closed.
// It also provides a function to toggle the state of this panel.

// This is useful for managing the visibility of a navbar or similar component in a Vue.js application.

import { ref } from 'vue'

const usePanel = () => {
  const isPanelOpen = ref(false) // State to control the visibility of the panel

  // Function to toggle the visibility of the panel
  const togglePanel = () => {
    isPanelOpen.value = !isPanelOpen.value
  }

  // Return the isPanelOpen reactive reference
  // and the togglePanel function to switch the panel visibility
  return { isPanelOpen, togglePanel }
}

// Export the usePanel function to be used in .vue files
export default usePanel
