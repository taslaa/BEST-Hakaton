import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import de from "./languages/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18n;
