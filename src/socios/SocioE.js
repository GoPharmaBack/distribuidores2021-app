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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJuan_Carlos_Cabral.png?alt=media&token=4fd4b176-0fc4-43ba-9690-21f0a793c5ca" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Juan Carlos Cabral</p>
              <p className="titulo-ponente">
              <FormattedMessage id="socio.e" />
              </p>

              <p>juan_carlos_cabral@baxter.com</p>
              <p>Tel:5539553194</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJuan_Carlos_Cabral.png?alt=media&token=4fd4b176-0fc4-43ba-9690-21f0a793c5ca" alt="ponencia especial" />
          <p>Juan Carlos Cabral</p>
          <p className="titulo-ponente">
          <FormattedMessage id="socio.e" />
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
