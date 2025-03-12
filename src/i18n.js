import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // ✅ English as default language
    debug: false,
    interpolation: {
      escapeValue: false, // Not needed for React
    },
    backend: {
      loadPath: "/{{lng}}/{{ns}}.json", // ✅ Ensure this path is correct
    },
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0,
    },
  });

// ✅ Correctly export i18n
export default i18n;
