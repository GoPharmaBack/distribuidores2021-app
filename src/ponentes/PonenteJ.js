import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
function PonenteJ() {
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
              src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FMaria_Beczalia.png?alt=media&token=40b3dc15-b8d9-4774-978f-947bdd0fe036"
              alt="ponencia especial"
            />
            <div className="texto">
              <p className="nombre">María Beczalia Mendoza</p>
              <p className="titulo-ponente">
                <FormattedMessage id="ponente.j" />
              </p>

              <p>maria_beczalia_mendoza@baxter.com</p>

              <p>
                "Comprometidos con una calidad superior y seguridad del
                paciente"
              </p>
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
            src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FMaria_Beczalia.png?alt=media&token=40b3dc15-b8d9-4774-978f-947bdd0fe036"
            alt="ponencia especial"
          />
          <p>María Beczalia Mendoza</p>
          <p className="titulo-ponente">
            <FormattedMessage id="ponente.j" />
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

export default PonenteJ;
