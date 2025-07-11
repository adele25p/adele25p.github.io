// This composable manages the theme of the application, allowing users to toggle between light and dark modes.
// It uses Vue's reactivity system to update the theme dynamically based on user preference or system settings.

// This is useful for providing a better user experience by respecting the user's system theme preference.

import { ref, onMounted } from 'vue'

const theme = ref('auto') // Default to 'auto' to respect system preference
const isDarkMode = ref(false) // Default to false, will be updated in onMounted

// Function to apply the theme based on the current value of theme
const applyTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const final = theme.value === 'dark' || (theme.value === 'auto' && prefersDark) ? 'dark' : ''

  document.documentElement.className = final
  isDarkMode.value = final === 'dark'
}

// Function to toggle the theme between 'auto', 'dark', and 'light'
const toggleTheme = () => {
  theme.value = theme.value === 'auto' ? 'dark' : theme.value === 'dark' ? 'light' : 'auto'
  localStorage.setItem('theme', theme.value)
  applyTheme()
}

// Function to initialize the theme on component mount
// and set up a listener for system preference changes
const useTheme = () => {
  onMounted(() => {
    theme.value = localStorage.getItem('theme') || 'auto'
    applyTheme()

    // Listen for changes in system preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (theme.value === 'auto') applyTheme()
    })
  })

  // Return the theme and isDarkMode reactive references
  // and the toggleTheme function to change the theme manually
  return { theme, isDarkMode, toggleTheme }
}

// Export the useTheme function to be used in .vue files
export default useTheme
