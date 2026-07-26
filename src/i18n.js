import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ka from './locales/ka/translation.json'
import en from './locales/en/translation.json'

const savedLang = localStorage.getItem('geeko-lang')

i18n.use(initReactI18next).init({
  resources: {
    ka: { translation: ka },
    en: { translation: en },
  },
  lng: savedLang || 'ka',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
