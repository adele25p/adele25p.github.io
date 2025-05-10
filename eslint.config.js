// Importing necessary modules and plugins for ESLint configuration
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// Exporting the ESLint configuration
export default defineConfig([
  {
    // Defining the name and files to lint
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'], // Specifies file types to lint
  },

  // Ignoring specific directories from linting
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser, // Adding browser-specific global variables
      },
    },
  },

  // Applying recommended JavaScript configurations
  js.configs.recommended,

  // Including essential Vue plugin configurations
  ...pluginVue.configs['flat/essential'],

  // Skipping formatting rules for Prettier
  skipFormatting,
])
