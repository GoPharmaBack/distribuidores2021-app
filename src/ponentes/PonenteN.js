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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FGovindha_Rhabarandhi.png?alt=media&token=488c69ef-9f9e-42ed-b7aa-9760b5a57f53"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Rhabarandhi Govindha Vielman</p>
              <p className="titulo-ponente">
               <FormattedMessage id="ponente.n" />
              </p>

              <p>rhabarandhi_vielman@baxter.com</p>
              <p>tel:50255607780</p>
              <p>!No somos productos, somos soluciones¡</p>
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FGovindha_Rhabarandhi.png?alt=media&token=488c69ef-9f9e-42ed-b7aa-9760b5a57f53"
            alt="ponencia especial"
          />
          <p>Rhabarandhi Govindha Vielman</p>
          <p className="titulo-ponente">
           <FormattedMessage id="ponente.n" />
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
