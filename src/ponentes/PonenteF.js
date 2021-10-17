import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


function PonenteF() {
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
            <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FCarla_Velazquez.png?alt=media&token=1bb9808f-1129-465a-9697-de7461ba2a6d" alt="ponencia especial" />
            <div className="texto">
              <p className="nombre">Carla Velázquez</p>
              <p className="titulo-ponente">
                Gerente de ética y cumplimiento

              </p>

              <p>carla_velazquez@baxter.com</p>
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
        <img src="https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FCarla_Velazquez.png?alt=media&token=1bb9808f-1129-465a-9697-de7461ba2a6d"  alt="ponencia especial" />
          <p>Carla Velázquez</p>
          <p className="titulo-ponente">
            Gerente de ética y cumplimiento

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

export default PonenteF;
