import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import Imparables from "../img/imparables.png";
import Unstoppable from "../img/unstoppable.png";

import { LangContext } from "../context/LangContext";
import { FormattedMessage } from "react-intl";
function Agendav2() {

  var imageLogo;
 
  const idioma = useContext(LangContext);
  const lang = localStorage.getItem("lang");
  console.log(idioma);
  if (lang) {
    if (lang === "es") {
      imageLogo = Imparables;
      
    } else if (lang === "en") {
      imageLogo = Unstoppable;
      
    } else {
      imageLogo = Unstoppable;
     
    }
  }
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);


  let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FMEXICO_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=f8553243-dc4e-41b1-b734-af068b66b1f7";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FMEXICO_AGENDA%20OCTUBRE_DISTRIBUIDORES_20.png?alt=media&token=57e9584b-6108-45e9-86b4-6d5de44fd370";
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
      <div className="agenda" >
      <img className="img-hero" src={imageLogo} alt="Baxter Somos" />
      <h3 id="agenda"><FormattedMessage id="title.agenda" /> MX </h3>
         <div className="contenedor-botones-agenda">
         <button className="btn-sm btn-primary p-2 m-1" onClick={() => setModalShow1(true)}>
            <FormattedMessage id="diauno.agenda" />
          </button>

          <button className="btn-sm btn-primary p-2 m-1" onClick={() => setModalShow2(true)}>
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

export default Agendav2;
