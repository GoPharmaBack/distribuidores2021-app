import React from "react";
import DataPonentes from "../context/contactosBaxterBD.json";


function ContactosBaxter() {
  const contactos = DataPonentes;
  const ListarContacto = contactos.map((contacto, index) => (
    <div key={index} className="col">
      <img src={contacto.imagen} alt="contacto" />
      <br/>
      <div className="texto">
        <div className="titulo">{contacto.nombre}:</div>
        <div className="cargo">{contacto.puesto}</div>
        <div className="correo">{contacto.correo}</div>
        <div className="correo">{contacto.number}</div>
      </div>
    </div>
  ));
  return <>{ListarContacto}</>;
}

export default ContactosBaxter;
