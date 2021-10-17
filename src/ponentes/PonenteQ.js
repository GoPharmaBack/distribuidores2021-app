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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FYvonne.png?alt=media&token=878cac8a-10a9-463b-9106-ad91b3fd109d" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Yvonne Chaluisant</p>
              <p className="titulo-ponente">
              Especialista en ventas

              </p>

              <p>yvonne_chaluisant_fornes@baxter.com</p>
              <p>tel: +1 7875120343</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FYvonne.png?alt=media&token=878cac8a-10a9-463b-9106-ad91b3fd109d" alt="ponencia especial"/>
          <p>Yvonne Chaluisant</p>
          <p className="titulo-ponente">
          Especialista en ventas

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

export default PonenteH;
