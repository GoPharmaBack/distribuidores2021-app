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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FMario_Gonzalez.png?alt=media&token=0bd0a388-fbcb-4812-aa07-ed33042d7157" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Mario Gonzalez</p>
              <p className="titulo-ponente">
               <FormattedMessage id="socio.g" />
              </p>

              <p>mario_e_gonzalez@baxter.com</p>
              <p>Tel: 8115778735</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FMario_Gonzalez.png?alt=media&token=0bd0a388-fbcb-4812-aa07-ed33042d7157" alt="ponencia especial" />
          <p>Mario Gonzalez</p>
          <p className="titulo-ponente">
           <FormattedMessage id="socio.g" />
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
