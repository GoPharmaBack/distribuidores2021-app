import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";
import CountDown from "../components/CountDown";
import Cookies from "universal-cookie";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Galeria from "../components/Galeria";
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
import User from "../img/Piero-Novello.png";
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
  let [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <small>Director General LATAM</small>
              <p>Piero Novello</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="contenedor-card">
              <div className="imagen">
                <img src="" alt="foto" />
              </div>
              <div className="texto">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae molestiae sint repellendus, velit enim hic, quis dolorum
                  quibusdam cum ab beatae amet magnam, debitis repudiandae
                  tempore exercitationem dolore aperiam quasi!
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
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
            <div className="contenedor-ponentes sibling-fade">
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>

              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              {/* ponente */}
              <div className="ponente" onClick={() => setModalShow(true)}>
                <img src={User} alt="ponente" />
                <small>Director General LATAM</small>
                <p>Piero Novello</p>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
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

        <div className="contenedor-galeria">
          <Galeria />
        </div>
        <br />
        <div className="dudas">
          <p>Dudas o sugerencias</p>
          <h5>Informes</h5>

          <div className="contenedor-personal">
            <div className="col">
              <img src="" alt="personal Baxter" />
              <div className="titulo">Nombre:</div>
              <div className="cargo">Cargo:</div>
              <div className="correo">Correo:</div>
            </div>
            <div className="col">
              <img src="" alt="personal Baxter" />
              <div className="titulo">Nombre:</div>
              <div className="cargo">Cargo:</div>
              <div className="correo">Correo:</div>
            </div>{" "}
            <div className="col">
              <img src="" alt="personal Baxter" />
              <div className="titulo">Nombre:</div>
              <div className="cargo">Cargo:</div>
              <div className="correo">Correo:</div>
            </div>
          </div>
        </div>

        <div className="contacto">
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
