import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
function PonenteD() {
  const lang = localStorage.getItem("lang");

  if (lang) {
    if (lang === "es") {
    } else if (lang === "en") {
    } else {
    }
  }
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="contenedor-modal d-flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FAlejandro_Duenas.png?alt=media&token=5e5e44c8-5028-4612-9998-0a7a8b2cc0d9"
              alt="ponencia especialS"
            />
            <div className="texto">
              <p className="nombre">Alejandro Dueñas</p>
              <p className="titulo-ponente">
              <FormattedMessage id="ponente.d" />
              </p>

              <p>alejandro_duenas@baxter.com</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      {" "}
      <div className="ponente" onClick={() => setModalShow(true)}>
        <div className="texto">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FAlejandro_Duenas.png?alt=media&token=5e5e44c8-5028-4612-9998-0a7a8b2cc0d9"
            alt="ponencia especialSS"
          />
          <p>Alejandro Dueñas</p>
          <p className="titulo-ponente">
          <FormattedMessage id="ponente.d" />
          </p>
        </div>
        <div className="imagen"></div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PonenteD;
