import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import { FaArrowCircleUp } from "react-icons/fa";
import CountDown from "../components/CountDown";
import Cookies from "universal-cookie";
import ContactosBaxter from "../components/ContactosBaxter";
import PonenciaEspecial from "../components/PonenciaEspecial";
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

import ImagenHero from "../img/img-hero.png";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import AgendaCam from "../components/AgendaCam";
import AgendaMx from "../components/AgendaMx";
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
    if (rooms[0] === "CAM") {
      Agenda = AgendaCam;
    } else if (rooms[0] === "PR") {
      Agenda = AgendaPr;
    } else if (rooms[0] === "CAR") {
      Agenda = AgendaCar;
    } else if (rooms[0] === "MX") {
      Agenda = AgendaMx;
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
                  10:00 A.M. <span> Caribe</span>
                </li>
                <li>
                  08:00 A.M. <span> Centroamérica</span>
                </li>
                <li>
                  09:00 A.M. <span> México</span>
                </li>
                <li>
                  10:00 A.M. <span> Puerto Rico</span>
                </li>
              </ul>

              <CountDown />
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
              <span>20+</span> <p>Ponentes nacionales e internacionales</p>
            </div>
            <div className="col">
              <span>25+</span> <p>Ponencias</p>
            </div>
            <div className="col">
              <span>6</span>{" "}
              <p>
                Líneas principales
                <br />
                de negocio.
              </p>
            </div>
            <div className="col">
              <span>100+</span>{" "}
              <p>
                Productos de <br />
                nuestro portafolio
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="imparables socios">
            <p>LIDERES</p>
            <h3>COMERCIALES</h3>

            <div className="contenedor-socios sibling-fade">
              {/* ponente */}
              <Socios />
            </div>
          </div>
          <PonenciaEspecial />

          <div className="imparables">
            <p>Ponentes</p>
            <h3>IMPARABLES</h3>
            <div className="contenedor-ponentes sibling-fade">
              {/* ponente */}

              <Ponentes />
            </div>
          </div>
          <Agenda />
          <br />
          <div className="botones-salas" id="salas">
            <h4>SALAS</h4>
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
          <p>Galería</p>
          <h3>Cuidado Renal</h3>
          <GaleriaRenal />
        </div>
        <div className="contenedor-galeria">
          <hr />
          <p>Galería</p>
          <h3>Cuidado Renal</h3>
          <GaleriaHospitalProduct />
        </div>
        <div className="contenedor-galeria">
          <hr />
          <p>Galería</p>
          <h3>Advanced Surgery</h3>
          <GaleriaAdvancedSurgery />
        </div>

        <div className="dudas">
          <p>Dudas o sugerencias</p>
          <h3>INFORMES</h3>
          <div className="contenedor-personal">
            <ContactosBaxter />
          </div>
        </div>

        <div className="contacto" id="contact">
          <p>Escríbenos</p>
          <h3>Estamos para ayudarte</h3>
          <Contacto />
        </div>

        <p>
          {" "}
          <FaArrowCircleUp
            className="scrollTop"
            onClick={scrollTop}
            style={{ display: showScroll ? "flex" : "none" }}
          />
        </p>
      </Fade>
    </>
  );
}

export default withRouter(Landing);
