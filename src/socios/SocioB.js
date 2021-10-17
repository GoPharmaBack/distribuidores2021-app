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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FAstrid_Cruz.png?alt=media&token=c6af4a25-5150-41e4-8c36-2c17351bb58e" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Astrid Cruz</p>
              <p className="titulo-ponente">
           <FormattedMessage id="socio.b" />
              </p>

              <p>astrid_cruz@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FAstrid_Cruz.png?alt=media&token=c6af4a25-5150-41e4-8c36-2c17351bb58e" alt="ponencia especial" />
          <p>Astrid Cruz</p>
          <p className="titulo-ponente">
         <FormattedMessage id="socio.b" />
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
