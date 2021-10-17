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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FCarlos_Velez.png?alt=media&token=225a1c01-a4bb-4355-b0e5-00fd4914fadd" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Carlos Vélez</p>
              <p className="titulo-ponente">
                Gerente de ventas Puerto Ricoa
              </p>

              <p>carlos_velez@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FCarlos_Velez.png?alt=media&token=225a1c01-a4bb-4355-b0e5-00fd4914fadd" alt="ponencia especial" />
          <p>Carlos Vélez</p>
          <p className="titulo-ponente">
            Gerente de ventas Puerto Ricoa
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
