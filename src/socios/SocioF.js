import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function SocioA() {
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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FKarine_Toledo.png?alt=media&token=8b765533-c99b-4170-8464-4ec77bb3fdc3" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Karine Toledo</p>
              <p className="titulo-ponente">
                <FormattedMessage id="socio.f" />
              </p>

              <p>karine_toledo@baxter.com</p>
              <p>Tel:50241492230</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FKarine_Toledo.png?alt=media&token=8b765533-c99b-4170-8464-4ec77bb3fdc3" alt="ponencia especial" />
          <p>Karine Toledo</p>
          <p className="titulo-ponente">
            <FormattedMessage id="socio.f" />
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

export default SocioA;
