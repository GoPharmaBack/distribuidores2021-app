import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";
import Evento from "../img/evento.png";
import Event from "../img/event.png";
import CountDown from "../components/CountDown";
import LogoHome from "../img/logo.svg";
import Fade from "react-reveal/Fade";

//import { FormattedMessage } from "react-intl";
import { LangContext } from "../context/LangContext";

function Home() {
  var imageLogo;
  var EventImage;
  const idioma = useContext(LangContext);
  const lang = localStorage.getItem("lang");

  if (lang) {
    if (lang === "es") {
      imageLogo = Imparables;
      EventImage = Evento;
    } else if (lang === "en") {
      imageLogo = Unstoppable;
      EventImage = Event;
    } else {
      imageLogo = Unstoppable;
      EventImage = Event;
    }
  }

  return (
    <Fade>
      <section className="start">
        <br />
        <img className="img-inicio" src={imageLogo} alt="Baxter Somos" />
        <br />
        <Fade >
          <CountDown />
        </Fade>
        <br />
        <br />
        {/* <Link to="/login">
        <button className="btn-primary">
          <FormattedMessage id="button.start" defaultMessage="Entrar" />
        </button>
      </Link> */}
        <img className="img-inicio2" src={EventImage} alt="Baxter Somos" />
        <br />
        <br />

        {/*  Baje la norma ISO 639-2 */}
        <div className="idiomas">
          <button
            className="btn-lang"
            onClick={() => idioma.establecerLenguaje("es")}
          >
            {" "}
            🇪🇸 spa
          </button>
          <button
            className="btn-lang"
            onClick={() => idioma.establecerLenguaje("en")}
          >
            🇬🇧 eng
          </button>
        </div>
        <img className="img-logo" src={LogoHome} alt="Baxter" />
          </section>
    </Fade>
  );
}

export default Home;
