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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FSusana_Tamayo.png?alt=media&token=14fa6cdf-214f-4a5a-8cf6-81ac924ed855"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Susana Tamayo</p>
              <p className="titulo-ponente">Gerente Mercadotecnia Biocirugía</p>

              <p>susana_tamayo@baxter.com</p>
              <p>tel:3325487507</p>
              <p>"Avanzando el arte de la curación"</p>
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
          <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FSusana_Tamayo.png?alt=media&token=14fa6cdf-214f-4a5a-8cf6-81ac924ed855" alt="ponencia especial"/>
          <p>Susana Tamayo</p>
          <p className="titulo-ponente">Gerente Mercadotecnia Biocirugía</p>
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
