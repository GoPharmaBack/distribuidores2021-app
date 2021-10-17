import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function PonenteA() {
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FPiero_Novello.png?alt=media&token=c4fdd3c7-8e37-424f-b7ea-907151eddaf8"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Piero Novello</p>
              <p className="titulo-ponente">
                <FormattedMessage id="ponente.a" />
              </p>

              <p>piero_novello@baxter.com</p>
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FPiero_Novello.png?alt=media&token=c4fdd3c7-8e37-424f-b7ea-907151eddaf8"
            alt="ponencia especial"
          />
          <p>Piero Novello</p>
          <p className="titulo-ponente">
            <FormattedMessage id="ponente.a" />
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

export default PonenteA;
