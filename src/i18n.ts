// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locale'; // import your locale resources

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already handles XSS prevention
  },
});

export default i18n;
