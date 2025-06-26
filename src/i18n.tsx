import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pageHomepageTranslations } from "./routes/Homepage/translations";

const resources = {
  it: {
    translation: {
      404: {
        title: "Ops!Pagina non trovata",
        button: "Torna alla home",
      },
      languages: {
        it: "Italiano",
        en: "Inglese",
      },
      pages: {
       ...pageHomepageTranslations.it,
      },
      actions: {
       
       
      }
    }
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: "it",
  fallbackLng: ["it"],
});

export default i18n;
