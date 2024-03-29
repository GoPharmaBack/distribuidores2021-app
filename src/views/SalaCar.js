import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Modal, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";


function SalaCar() {
  useEffect(() => {
    setModalShow(true);
  }, []);

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
          <iframe
            id="JotFormIFrame-212609285006048"
            title="Certificado de Asistencia - Distribuidores"
            onload="window.parent.scrollTo(0,0)"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/212609285006048"
            frameBorder={0}
            style={{ minWidth: "100%", height: 539, border: "none" }}
            scrolling="no"
          ></iframe>
          <br />
          <small className="frase-modal">
            Es necesario finalizar el formulario antes de cerrar de lo contrario
            no obtendra su asistencia
          </small>
          <Button className="mb-3" onClick={props.onHide}>
            cerrar
          </Button>
          <br />
        </Modal>
      </div>
    );
  }
  return (
    <>
      <Fade>
        <section className="sala">
          <div className="contenedor">
            <h1>Sala CAR</h1>

            <div className="contenedor-video">
              {/* Español */}
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  title="SalaCar"
                  src="https://vimeo.com/event/1384782/embed"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
                <br />
                <a
                  className="btn-sm btn-primary cien"
                  rel="noreferrer"
                  href="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/ENG_TOOLKIT.zip?alt=media&token=f17de308-994a-4589-a3c6-37bd2daf8c6e"
                >
                  download our compliance tool kit{" "}
                </a>
                <br />
              </div>

              {/* Ingles */}

              {/* <div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://vimeo.com/event/1384779/embed" frameBorder={0} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} /></div> */}
            </div>

            <Iframe
              className="chat"
              src="https://minnit.chat/CARDist?embed&&nickname="
              allowTransparency="true"
            />
            <a
              className="bnt btn-primary"
              rel="noreferrer"
              href="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/ENG_TOOLKIT.zip?alt=media&token=f17de308-994a-4589-a3c6-37bd2daf8c6e"
            >
              download our compliance tool kit{" "}
            </a>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </section>
      </Fade>
    </>
  );
}

export default SalaCar;
