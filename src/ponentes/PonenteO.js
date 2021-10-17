import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FRoxana_Rojas.png?alt=media&token=0cf19765-433a-41a3-911f-4dde4ec90240"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Roxana Rojas</p>
              <p className="titulo-ponente">
                 <FormattedMessage id="ponente.o" />
              </p>

              <p>roxana_rojas@baxter.com</p>
              <p>tel:5539396114</p>
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
          <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FRoxana_Rojas.png?alt=media&token=0cf19765-433a-41a3-911f-4dde4ec90240" alt="ponencia especial" />
          <p>Roxana Rojas</p>
          <p className="titulo-ponente">
             <FormattedMessage id="ponente.o" />
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
