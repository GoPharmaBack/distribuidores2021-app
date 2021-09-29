import React, { useState } from "react";
import LangEs from "../lang/es.json";
import LangEn from "../lang/en.json";
import { IntlProvider } from "react-intl";
const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  let localePorDefecto;
  let mensajesPorDefecto;

  const lang = localStorage.getItem("lang");

  if (lang) {
    localePorDefecto = lang;

    if (lang === "es") {
      mensajesPorDefecto = LangEs;
    } else if (lang === "en") {
      mensajesPorDefecto = LangEn;
    } else {
      localePorDefecto = "en";
      mensajesPorDefecto = LangEn;
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
  const [locale, establecerLocale] = useState(localePorDefecto);

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es":
        establecerMensajes(LangEs);
        establecerLocale("es");
        localStorage.setItem("lang", "es");
        break;
      case "en":
        establecerMensajes(LangEn);
        establecerLocale("en");
        localStorage.setItem("lang", "en");
        break;
      default:
        establecerMensajes(LangEn);
        establecerLocale("en");
        localStorage.setItem("lang", "en");
    }
  };
  return (
    <LangContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
