import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translations
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES }
};
const lang = localStorage.getItem('language') || localStorage.setItem('language', 'en');
i18n
  .use(initReactI18next) // Add react-i18next to the i18n instance
  .init({
    resources,
    lng: lang, // Default language
    fallbackLng: 'en', // Backup
    interpolation: {
      escapeValue: false, 
    },
  });
  console.log(i18n)
export default i18n;