import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PonenteEspecial from "../img/VICTOR_GOMEZ.png";
import Cv from "../img/CV_VICTOR_PONENTE–ESPECIAL.png"
function PonenciaEspecial() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <img src={Cv} className="cv" alt="" />
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
      <div className="ponencia-especial" onClick={() => setModalShow(true)}>
        <div className="texto">
          <h3>19 OCTUBRE</h3>
          <small>Ponencia especial</small>
          <p className="ponente">Víctor Gómez</p>
          <ul className="horarios">
            <li>
              09:00 h <span> Centroamérica</span>
            </li>
            <li>
              10:00 h <span> México</span>
            </li>
            <li>
              11:00 h <span> Puerto Rico</span>
            </li>
            <li>
              11:00 h <span> Puerto Rico</span>
            </li>
          </ul>
        </div>
        <div className="imagen">
          <img src={PonenteEspecial} alt="ponencia especial" />
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PonenciaEspecial;
