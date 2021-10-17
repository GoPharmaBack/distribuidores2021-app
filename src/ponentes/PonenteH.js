import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function PonenteH() {
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FGuillermo.png?alt=media&token=dbac4e36-34fd-4e17-8310-e588130cd549"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">José Guillermo Salazar</p>
              <p className="titulo-ponente">Consultor Legal</p>

              <p>jose_guillermo_salazar_paiz@baxter.com</p>
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FGuillermo.png?alt=media&token=dbac4e36-34fd-4e17-8310-e588130cd549"
            alt="ponented"
          />
          <p>José Guillermo Salazar</p>
          <p className="titulo-ponente">Consultor Legal</p>
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

export default PonenteH;
