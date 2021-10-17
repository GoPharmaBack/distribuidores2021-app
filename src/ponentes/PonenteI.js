import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function PonenteI() {
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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJuliana_Morales.png?alt=media&token=5832e65f-ec6e-4ca3-ae81-795bcf4fb613" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Juliana Morales</p>
              <p className="titulo-ponente">
                Gerente de Mercadotecnia Nutrición

              </p>

              <p>juliana_morales@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJuliana_Morales.png?alt=media&token=5832e65f-ec6e-4ca3-ae81-795bcf4fb613" alt="ponented" />
          <p>Juliana Morales</p>
          <p className="titulo-ponente">
            Gerente de Mercadotecnia Nutrición

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

export default PonenteI;
