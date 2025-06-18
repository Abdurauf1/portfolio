import i18n from "i18next";
import HTTPBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { getLang } from "./utils/helper";

i18n
  .use(HTTPBackend)
  .use(initReactI18next)
  .init({
    lng: getLang(),
    fallbackLng: "en",
    backend: {
      loadPath: "locales/{{lng}}/translation.json"
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;