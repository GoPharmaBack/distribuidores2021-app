import React from "react";

import DataPonentes from "../context/data-ponentes.json";

//import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal"

function Ponentes() {
  const ponentes = DataPonentes;
  const ListaPonentes = ponentes.map((ponente, index) => (
    <div key={index} className="ponente">
      <img src={ponente.img} alt="ponente" />
      <small>{ponente.position}</small>
      <p>{ponente.nombre}</p>
    </div>
  ));
  return (
    <div className="contenedor-ponentes sibling-fade">{ListaPonentes}</div>
  );
}

export default Ponentes;
