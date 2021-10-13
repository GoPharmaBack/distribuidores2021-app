import React from "react";
import DataPonentes from "../context/data-ponentes.json";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const modales = DataPonentes;
  const ListaModales = modales.map((modalPonente, index) => (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      key={props.index}
     
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter modal-texto">
          <img key={index} src={modalPonente.img} alt="ponente" />

          <small>{modalPonente.position}</small>
          <p>{modalPonente.nombre}</p>
          <p>{modalPonente.email}</p>
          <p>{modalPonente.phone}</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  ));
  console.log(ListaModales.index)
  return <div  onClick={(e) => e.stopPropagation()} >{ListaModales}</div>;
}

export default MyVerticallyCenteredModal;
