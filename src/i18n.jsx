import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

// installation shell command:
//pnpm install react-i18next i18next --save

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  },
  lng: "en", // Langue par défaut
  fallbackLng: "en", // Langue de secours
  interpolation: {
    escapeValue: false, // Ne pas échapper les HTML
  },
});

export default i18n;
