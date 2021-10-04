import React from "react";
import { withRouter } from "react-router-dom";

import CountDown from "../components/CountDown";

import Cookies from "universal-cookie";

import { FormattedMessage } from "react-intl";
//imagenes establecerLenguaje
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";
import Evento from "../img/evento.png";
import Event from "../img/event.png";
//imagenes no lenguaje
import ImagenHero from "../img/img-hero.png";

const cookies = new Cookies();

function logout() {
  cookies.remove("message");
  cookies.remove("rooms");
  window.location.href = "./";
  localStorage.clear();
  localStorage.setItem("lang", "en");

  console.log("borrar");
}
//var hola = cookies.get("rooms");
//var rol = JSON.stringify(cookies.get("roles"));

function Landing() {
  var imageLogo;
  var EventImage;

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
    <>
      <section className="landing-hero">
        <div className="contenedor">
          <div className="left">
            <img className="img-hero" src={imageLogo} alt="Baxter Somos" />

            <ul className="horarios">
              <li>
                09:00 h <span> Centroamérica</span>
              </li>
              <li>
                09:00 h <span> México</span>
              </li>
              <li>
                09:00 h <span> Puerto Rico</span>
              </li>
            </ul>

            <CountDown />
          </div>
          <div className="right">
            <img className="img-hero" src={ImagenHero} alt="img" />
          </div>
        </div>
        <div className="savethedate">
          <p><FormattedMessage id="save.date" /></p>
          
          <h2>19 - 21 OCTUBRE</h2>
          <img className="img-landing" src={EventImage} alt="" />
        </div>
      </section>
      <section>
        <button onClick={logout}>logout</button>
      </section>
    </>
  );
}

export default withRouter(Landing);
