import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function PonenteB() {
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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FIndia_G.png?alt=media&token=5e96c557-26a7-4db8-b8e3-98c0e8a55bd9" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Inda González</p>
              <p className="titulo-ponente">
              Directora de marketing México, Centroamérica, Puerto Rico y Caribe 
              </p>

              <p>inda_gonzalez@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FIndia_G.png?alt=media&token=5e96c557-26a7-4db8-b8e3-98c0e8a55bd9" alt="ponencia especial" />
          <p>Inda González</p>
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

export default PonenteB;
