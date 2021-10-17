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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FFrancisco_Morales.png?alt=media&token=22a142ef-2ede-48d4-a36d-1b55454fe7e9" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Francisco Morales</p>
              <p className="titulo-ponente">
              <FormattedMessage id="socio.d" />
              </p>

              <p>francisco_morales@baxter.com</p>
              <p>Tel: 5539553194</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FFrancisco_Morales.png?alt=media&token=22a142ef-2ede-48d4-a36d-1b55454fe7e9" alt="ponencia especial" />
          <p>Francisco Morales</p>
          <p className="titulo-ponente">
          <FormattedMessage id="socio.d" />
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
