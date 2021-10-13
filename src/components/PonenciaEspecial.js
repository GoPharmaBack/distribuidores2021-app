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
          <p>Ponencia especial.</p>
          <br />
          <h4 className="ponente">Víctor Gómez</h4>
         
          <small>Perspectivas Económicas de América Latina <br/> más allá del COVID-19.</small>
          <ul className="horarios">
            <li>
            08:55 am <span> Centroamérica</span>
            </li>
            <li>
            09:55 am <span> México</span>
            </li>
            <li>
            10:55 am <span> Caribe</span>
            </li>
            <li>
            10:55 amh <span> Puerto Rico</span>
            </li>
          </ul>
          <button className="btn-sm btn-primary">Conoce Más</button>
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
