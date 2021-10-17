import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
function PonenteE() {
  const lang = localStorage.getItem("lang");

  if (lang) {
    if (lang === "es") {
    } else if (lang === "en") {
    } else {
    }
  }
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FCarhil.png?alt=media&token=d499f290-1fdd-4357-9be6-e2b519dbab80"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">Carhil Peréz Montero</p>
              <p className="titulo-ponente">
                <FormattedMessage id="ponente.e" />
              </p>

              <p>carhil_perez_montero@baxter.com</p>
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FCarhil.png?alt=media&token=d499f290-1fdd-4357-9be6-e2b519dbab80"
            alt="ponencia especial"
          />
          <p>Carhil Peréz Montero</p>
          <p className="titulo-ponente"><FormattedMessage id="ponente.e" /></p>
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

export default PonenteE;
