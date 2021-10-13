import React, { useState } from "react";

import DataSocios from "../context/data-socios.json";

import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal";

function Socios(props) {
  let [modalShow, setModalShow] = useState(false);

  const socios = DataSocios;
  const ListaSocios = socios.map((socio, index) => (
    <div key={index} className="ponente" onClick={() => setModalShow(true)}>
      <img src={socio.img} alt="socio" />
      <br />
      <p>{socio.nombre}</p>
      <small>{socio.position}</small>
    </div>
  ));

  return (
    
      <>{ListaSocios}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        value={socios.nombre}
      />
    </>
  );
}

export default Socios;