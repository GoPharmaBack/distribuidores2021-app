import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function PonenteK() {
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FMiriam_Cabrera.png?alt=media&token=74fcf82d-e8f6-49b7-9f25-25ee4baf7c3b"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Miriam Cabrera</p>
              <p className="titulo-ponente">
                Especialista en Educación PD Clínica
              </p>
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FMiriam_Cabrera.png?alt=media&token=74fcf82d-e8f6-49b7-9f25-25ee4baf7c3b"
            alt="ponencia especial"
          />
          <p>Miriam Cabrera</p>
          <p className="titulo-ponente">Especialista en Educación PD Clínica</p>
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

export default PonenteK;
