import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function PonenteL() {
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FPatricia_Ocampo.png?alt=media&token=651406cf-aacf-4466-9ab9-8b6bf72861cb"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Patricia Ocampo</p>
              <p className="titulo-ponente">Gerente de Excelencia Comercial</p>

              <p>elia_patricia_ocampo@baxter.com</p>
              <p>tel:+52 (55) 80447048</p>
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
          <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FPatricia_Ocampo.png?alt=media&token=651406cf-aacf-4466-9ab9-8b6bf72861cb" alt="ponencia especial"/>
          <p>Patricia Ocampo</p>
          <p className="titulo-ponente">Gerente de Excelencia Comercial</p>
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

export default PonenteL;
