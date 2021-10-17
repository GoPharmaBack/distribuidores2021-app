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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FPaula_Avila.png?alt=media&token=28c74bf0-e17c-4491-a816-45eef1141899" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Paula Ávila</p>
              <p className="titulo-ponente">
                Gerente de Mercadotecnia Diálisis Peritoneal

              </p>

              <p>paula_avila@baxter.com"</p>
              <p>tel: +57 3113777049</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FPaula_Avila.png?alt=media&token=28c74bf0-e17c-4491-a816-45eef1141899" alt="ponencia especial"/>
          <p>Paula Ávila</p>
          <p className="titulo-ponente">
            Gerente de Mercadotecnia Diálisis Peritoneal

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
