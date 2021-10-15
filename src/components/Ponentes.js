import React, { useState } from "react";

import DataPonentes from "../context/data-ponentes.json";

import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal";

function Ponentes(props) {
  let [modalShow, setModalShow] = useState(false);

  const ponentes = DataPonentes;
  const ListaPonentes = ponentes.map((ponente, index) => (
    <div key={index} className="ponente" onClick={() => setModalShow(true)}>
      <img src={ponente.img} alt="ponente" />
      <br />
      <p>{ponente.nombre}</p>
      <small className="titulo-ponente">{ponente.position}</small>
    </div>
  ));

  return (
    <div className="contenedor-ponentes sibling-fade">
      {ListaPonentes}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        value={ponentes.nombre}
      />
    </div>
  );
}

export default Ponentes;
