import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";


import { LangContext } from "../context/LangContext";
import { FormattedMessage } from "react-intl";
function AgendaCar() {
  let Agenda19 =
    "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCARIBE_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=21c375b9-3eb6-48ab-b639-542aec088d0e";

  let Agenda20 =
    "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCARIBE_AGENDA%20OCTUBRE_DISTRIBUIDORES_20.png?alt=media&token=4dac77e1-2250-4230-99ef-4aba5bc932ce";

  let Agenda19eng =
    "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCARIBBEAN_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=c5333a4b-902b-4bc4-a87a-78dcf568bd8f";

  let Agenda20eng =
    "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCARIBBEAN_AGENDA%20OCTUBRE_DISTRIBUIDORES_20.png?alt=media&token=49a62290-ba1b-4dc1-b2e9-2e51ba1cb293";
  
  var  Agenda19a;
  var Agenda20b;

  const idioma = useContext(LangContext);
  const lang = localStorage.getItem("lang");
  console.log(idioma);
  if (lang) {
    if (lang === "es") {
      
      Agenda19a = Agenda19;
      Agenda20b = Agenda20;
    } else if (lang === "en") {
    
      Agenda19a = Agenda19eng;
      Agenda20b = Agenda20eng;
    } else {
     
      Agenda19a = Agenda19eng;
      Agenda20b = Agenda20eng;
    }
  }
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  

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
          <img src={Agenda19a} className="cv" alt="" />
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
          <img src={Agenda20b} className="cv" alt="" />
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
          <FormattedMessage id="title.agenda" /> CAR{" "}
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

export default AgendaCar;
