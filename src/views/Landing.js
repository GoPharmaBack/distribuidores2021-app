import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";
import CountDown from "../components/CountDown";
import Cookies from "universal-cookie";
import Modal from "../components/Modal";
import { FormattedMessage } from "react-intl";
//imagenes establecerLenguaje
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";
import Evento from "../img/evento.png";
import Event from "../img/event.png";
//imagenes no lenguaje
import ImagenHero from "../img/img-hero.png";
import Fade from "react-reveal/Fade";
import User from "../img/Piero-Novello.png";
import styled from "styled-components";
const cookies = new Cookies();
var rooms = cookies.get("rooms");
//var rol = JSON.stringify(cookies.get("roles"));
console.log(rooms);

function Landing() {
  var imageLogo;
  var EventImage;
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
  
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <>
      <Fade>
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
          <br />
          <div className="savethedate">
            <p>
              <FormattedMessage id="save.date" />
            </p>

            <h2>19 - 21 OCTUBRE</h2>
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
          <div className="imparables">
            <p>imparables de hoy</p>
            <h3>PONENTES</h3>
            <ContenedorBotones className="contenedor-ponentes sibling-fade">
              <div
             onClick={() => cambiarEstadoModal1(!estadoModal1)}
              >
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Hola!"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
			>
				<Contenido>
					<h1>Ventana Modal</h1>
					<p>Reutilizable y con opciones de personalización.</p>
					<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
				</Contenido>
			</Modal>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
              <div className="ponente">
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
              </div>
            </ContenedorBotones>
          </div>

          <div className="ponencia-especial">
            <div className="texto">
              <h3>Fecha</h3>
              <small>Ponencia especial</small>

              <ul>
                <li>horario</li>
                <li>horario</li>
                <li>horario</li>
              </ul>
            </div>
            <div className="imagen">
              <img src="/" alt="ponencia especial" />
            </div>
          </div>
          <div className="agenda">agenda</div>
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
const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;