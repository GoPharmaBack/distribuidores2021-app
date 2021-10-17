import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function PonenteG() {
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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FChristian_Pillado.png?alt=media&token=d3a79677-bc90-464d-ad96-4157b734a417" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Christian Pillado</p>
              <p className="titulo-ponente">
                Gerente de Mercadotecnia Agudo

              </p>

              <p>christian_pillado@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FChristian_Pillado.png?alt=media&token=d3a79677-bc90-464d-ad96-4157b734a417" alt="ponented" />
          <p>Christian Pillado</p>
          <p className="titulo-ponente">
            Gerente de Mercadotecnia Agudo

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

export default PonenteG;
