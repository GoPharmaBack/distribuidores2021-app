import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PonenteEspecial from "../img/VICTOR_GOMEZ.png";
import Cv from "../img/CV_VICTOR_PONENTE–ESPECIAL.png";
import { FormattedMessage } from "react-intl";
function PonenciaEspecial() {
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
          <h3><FormattedMessage id="fecha.especial" /></h3>
          <p>
            <FormattedMessage id="ponencia.especial" />
          </p>
          <br />
          <h4 className="ponente">Víctor Gómez</h4>

          <p className="ponencia-especial-titulo">
            Perspectivas Económicas de América Latina más allá del COVID-19.
          </p>
          <ul className="horarios">
                <li>
                  08:55 A.M. <span> <FormattedMessage id="place.caribe" /> (GMT-4)</span>
                </li>
                <li>
                  09:55 A.M. <span> <FormattedMessage id="place.cam" />  (GMT-6)</span>
                </li>
                <li>
                  10:55 A.M. <span>  <FormattedMessage id="place.mx" />  ( GMT-5)</span>
                </li>
                <li>
                  10:55 A.M. <span> Puerto Rico (GMT-4)</span>
                </li>
              </ul>
          <button className="btn-sm btn-primary"><FormattedMessage id="button.ponente" /></button>
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
