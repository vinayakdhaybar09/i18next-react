import i18n from "i18next";
import Backend from "i18next-http-backend"; //   public/locales/{lang}/translation.json     its a default location
// import Cache from 'i18next-localstorage-cache';
// import postProcessor from 'i18next-sprintf-postprocessor';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  // .use(Cache)
  .use(LanguageDetector)
  .use(initReactI18next)
  // .use(postProcessor)
  .init({
    fallbackLng: "en",
    debug: true, // false when its in production
    interpolation: {
      escapeValue: false // to avoid cross side scripting
    }
  });

export default i18n;
