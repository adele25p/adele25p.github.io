// I18n configuration for the application
// This file sets up the internationalization (i18n) support for the application, including supported locales, initial locale detection, and synchronization of the document's language attribute with the current locale.

import { createI18n } from 'vue-i18n'

import en from './locales/en'
import fr from './locales/fr'

export const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
})