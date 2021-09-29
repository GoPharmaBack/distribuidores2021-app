import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";
import Evento from "../img/evento.png";
import CountDown from "../components/CountDown";
import LogoHome from "../img/logo.svg";
import { FormattedMessage } from "react-intl";
import { LangContext } from "../context/LangContext";

function Home() {
  var imageLogo;

  const idioma = useContext(LangContext);
  const lang = localStorage.getItem("lang");

  if (lang) {
    if (lang === "es") {
      imageLogo = Imparables;
    } else if (lang === "en") {
      imageLogo = Unstoppable;
    } else {
      imageLogo = Unstoppable;
    }
  }

  return (
    <section className="start">
      <br />
      <img className="img-hero" src={imageLogo} alt="Baxter Somos" />
      <br />
      <CountDown />
      <br />
      <br />
      <Link to="/login">
        <button className="btn-primary">
          <FormattedMessage id="button.start" defaultMessage="Entrar" />
        </button>
      </Link>
      <img className="img-hero" src={Evento} alt="Baxter Somos" />
      <br />
      <br />
      <img src={LogoHome} alt="Baxter" />
      <div className="idiomas">
        <button onClick={() => idioma.establecerLenguaje("es")}> 🇲🇽</button>
        <button onClick={() => idioma.establecerLenguaje("en")}>🇬🇧</button>
      </div>
    </section>
  );
}

export default Home;
