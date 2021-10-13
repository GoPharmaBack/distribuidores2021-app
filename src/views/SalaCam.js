import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Modal, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function SalaCam() {
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
          <Button onClick={props.onHide}>cerrar</Button>
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
            <h1>Sala CAM</h1>

            <div className="contenedor-video">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  title="Sala México"
                  src="https://vimeo.com/event/1362559/embed"
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
              </div>
            </div>

            <Iframe
              className="chat"
              src="https://minnit.chat/MX?embed&&nickname="
              allowTransparency="true"
            />

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

export default SalaCam;
