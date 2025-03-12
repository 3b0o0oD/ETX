i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en", // Force default language to English
    fallbackLng: "en", // Ensure fallback is English
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage", "cookie"], // Store language preference
    },
  });
export default i18n;
