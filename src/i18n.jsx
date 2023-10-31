import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/locales/en/translation.json";
import translationFR from "../public/locales/fr/translation.json";

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
