import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FEric_R.png?alt=media&token=ea8fa467-7e88-4208-b9a0-1932abf65560" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Éric Ruiz</p>
              <p className="titulo-ponente">
                Director General para México, Centro y Sudamérica
              </p>

              
              <p>eric_ruiz@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FEric_R.png?alt=media&token=ea8fa467-7e88-4208-b9a0-1932abf65560" alt="ponencia especial" />
          <p>Éric Ruiz</p>
          <p className="titulo-ponente">
          Director Comercial para México, Centroamérica y Caribe
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
