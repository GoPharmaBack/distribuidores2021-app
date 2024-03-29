import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import { FaArrowCircleUp } from "react-icons/fa";

import Cookies from "universal-cookie";
import ContactosBaxter from "../components/ContactosBaxter";

import Socios from "../components/Socios";
import { FormattedMessage } from "react-intl";
import GaleriaAdvancedSurgery from "../components/GaleriaAdvancedSurgery";
import GaleriaRenal from "../components/GaleriaRenal";
import GaleriaHospitalProduct from "../components/GaleriaHospitalProduct";
import Contacto from "../components/ContactForm/ContactForm.js";
//imagenes establecerLenguaje
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";
import Evento from "../img/evento.png";
import Event from "../img/event.png";
import "bootstrap/dist/css/bootstrap.min.css";
//imagenes no lenguaje
import AgendaMx from "../components/AgendaMx"
import SuperAgenda from "../components/SuperAgenda"

import ImagenHero from "../img/img-hero.png";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import AgendaCam from "../components/AgendaCam";
//import AgendaMx from "../components/AgendaMx";
import AgendaPr from "../components/AgendaPr";
import AgendaCar from "../components/AgendaCar";
//import AgendaCarEng from "../components/AgendaCarEng";

import Ponentes from "../components/Ponentes";

const cookies = new Cookies();
var rooms = cookies.get("rooms");
//var rol = JSON.stringify(cookies.get("roles"));

console.log(rooms);

function Landing() {
  var imageLogo;
  var EventImage;
  var Agenda;
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);
  const idioma = useContext(LangContext);
  const lang = localStorage.getItem("lang");
  console.log(idioma);
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

  if (rooms) {
    if (rooms.length === 4) {
      Agenda = SuperAgenda;
    } else if (rooms[0] === "PR") {
      Agenda = AgendaPr;
    } else if (rooms[0] === "CAR") {
      Agenda = AgendaCar;
    } else if (rooms[0] === "MX") {
      Agenda = AgendaMx;
    } else if (rooms[0] === "CAM") {
      Agenda = AgendaCam;
    }
    
    
  }

  return (
    <>
      <Fade>
      
        <section className="landing-hero">
        
          <div className="contenedor">
            <div className="left">
              <img className="img-hero" src={imageLogo} alt="Baxter Somos" />

              <ul className="horarios">
                <li>
                  10:00 A.M.{" "}
                  <span>
                    {" "}
                    <FormattedMessage id="place.caribe" /> (GMT-4)
                  </span>
                </li>
                <li>
                  08:00 A.M.{" "}
                  <span>
                    {" "}
                    <FormattedMessage id="place.cam" /> (GMT-6)
                  </span>
                </li>
                <li>
                  09:00 A.M.{" "}
                  <span>
                    {" "}
                    <FormattedMessage id="place.mx" /> ( GMT-5)
                  </span>
                </li>
                <li>
                  10:00 A.M. <span> Puerto Rico (GMT-4)</span>
                </li>
              </ul>

            
            </div>
            <div className="right">
              <img className="img-hero" src={ImagenHero} alt="img" />
            </div>
          </div>
          <br />
          <div className="savethedate">
            <p>
              <FormattedMessage id="save.date" />
            </p>

            <h2>
              <FormattedMessage id="date.event" />
            </h2>
            <img className="img-landing" src={EventImage} alt="" />
          </div>
          <br />
          <br />
          <div className="actividades">
            <div className="col">
              <span>20+</span>{" "}
              <p>
                <FormattedMessage id="ponentes.contador" />
              </p>
            </div>
            <div className="col">
              <span>25+</span>{" "}
              <p>
                <FormattedMessage id="ponencias.contador" />
              </p>
            </div>
            <div className="col">
              <span>6</span>{" "}
              <p>
                <FormattedMessage id="lineas.contador" />
              </p>
            </div>
            <div className="col">
              <span>100+</span>{" "}
              <p>
                <FormattedMessage id="productos.contador" />
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="imparables socios">
            <p>
              <FormattedMessage id="lidere.titulo" />
            </p>
            <h3>
              <FormattedMessage id="lidere.subtitulo" />
            </h3>

            <div className="contenedor-socios sibling-fade">
              {/* ponente */}
              <Socios />
            </div>
          </div>
          

          <div className="imparables">
            <p>
              <FormattedMessage id="ponentes.titulo" />
            </p>
            <h3>
              <FormattedMessage id="ponentes.subtitulo" />
            </h3>
            <div className="contenedor-ponentes sibling-fade">
              {/* ponente */}

              <Ponentes />
            </div>
          </div>
         <section  id="agenda">
         <img className="img-hero" src={imageLogo} alt="Baxter Somos" />
         <br/>
          <Agenda />
         </section>
          <br />
          <div className="botones-salas" id="salas">
            <h3><FormattedMessage id="title.rooms" /></h3>
            <p>
              <FormattedMessage id="save.date" />
            </p>

            <div className="contenedor-botones">
              {rooms.map((room) => (
                <Link key={room} to={room}>
                  <button className="btn-primary">{room}</button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="contenedor-galeria">
          <hr />

          <br />
          <p>
            <FormattedMessage id="galeria.title" />
          </p>
          <h3>
            {" "}
            <FormattedMessage id="renal.care" />
          </h3>
          <GaleriaRenal />
        </div>

        <div className="contenedor-galeria">
          <hr />
          <br />
          <p>
            <FormattedMessage id="galeria.title" />
          </p>
          <h3>
            <FormattedMessage id="hosp.prod" />{" "}
          </h3>
          <GaleriaHospitalProduct />
        </div>
        <br />
        <div className="contenedor-galeria">
          <hr />
          <br />
          <p>
            <FormattedMessage id="galeria.title" />
          </p>
          <h3>Advanced Surgery</h3>
          <GaleriaAdvancedSurgery />
        </div>
        <br />
        <div className="dudas">
          <p>
            <FormattedMessage id="dudas.sugerencias" />
          </p>
          <h3>
            <FormattedMessage id="dudas.info" />
          </h3>
          <div className="contenedor-personal">
            <ContactosBaxter />
          </div>
        </div>

        <div className="contacto" id="contact">
          <p><FormattedMessage id="info.footer" /></p>
          <h3><FormattedMessage id="info.footer2" /></h3>
          <Contacto />
        </div>

        <i className="flotante">
          {" "}
          <FaArrowCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ display: showScroll ? "flex" : "none" }}
          />
        </i>
      </Fade>
    </>
  );
}

export default withRouter(Landing);
