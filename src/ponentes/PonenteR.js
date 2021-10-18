import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function PonenteR() {
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJose_Antonio_Andrei.png?alt=media&token=589bb768-ff03-490a-a6e5-65cb1483f8c4"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Antonio Andreu
</p>
              <p className="titulo-ponente">
                <FormattedMessage id="ponente.r" />
              </p>

              <p>jose_andreu@baxter.com</p>
              <p>tel: 5548405531</p>

            
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJose_Antonio_Andrei.png?alt=media&token=589bb768-ff03-490a-a6e5-65cb1483f8c4"
            alt="ponencia especial"
          />
          <p>Antonio Andreu
</p>
          <p className="titulo-ponente">
            <FormattedMessage id="ponente.r" />
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

export default PonenteR;
