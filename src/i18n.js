import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./lang/eng/eng.json";
import msTranslation from "./lang/malay/malay.json";
import zhTranslation from "./lang/mandarin/zh.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ms: { translation: msTranslation },
      zh: { translation: zhTranslation },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
    },
    interpolation: {
      escapeValue: false, // not needed for React
    },
    // Add an onInitialized callback function to log the detected language
    // This function will be called once i18n initialization is complete
    // and the language is detected
    onInitialized: (options) => {
      console.log("Detected language:", options.lng);
    },
  });

export default i18n;
