import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { LangContext } from "../context/LangContext";
import { FormattedMessage } from "react-intl";
function AgendaCam() {
  const idioma = useContext(LangContext);

  console.log(idioma);

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  let Agenda19 =
    "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCENTROAMERICA_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=c55c9a58-e08a-4ce3-a151-e755fd5128fb";

  let Agenda20 =
    "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCENTROAMERICA_AGENDA%20OCTUBRE_DISTRIBUIDORES_20.png?alt=media&token=d9e4ba66-b040-49a4-b8db-75672d55c9e5";
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
          <img src={Agenda19} className="cv" alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModalDos(props) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img src={Agenda20} className="cv" alt="" />
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
      <div className="agenda">
        <h3 id="agenda">
          <FormattedMessage id="title.agenda" /> CAM{" "}
        </h3>
        <div className="contenedor-botones-agenda">
          <button
            className="btn-sm btn-primary p-2 m-1"
            onClick={() => setModalShow1(true)}
          >
            <FormattedMessage id="diauno.agenda" />
          </button>

          <button
            className="btn-sm btn-primary p-2 m-1"
            onClick={() => setModalShow2(true)}
          >
            <FormattedMessage id="diados.agenda" />
          </button>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
      <MyVerticallyCenteredModalDos
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </>
  );
}

export default AgendaCam;
