import React, { useState } from "react";
let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCENTROAMERICA_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=c55c9a58-e08a-4ce3-a151-e755fd5128fb";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCENTROAMERICA_AGENDA%20OCTUBRE_DISTRIBUIDORES_20.png?alt=media&token=d9e4ba66-b040-49a4-b8db-75672d55c9e5";

function AgendaCam() {
  function toggleImage() {
    var img1 = Agenda19;

    var imgElement = document.getElementById("toggleImage");
    imgElement.src = imgElement.src === img1 ? img1 : img1;
    setActive(!isActive);
  }

  function toggleImage2() {
    var img2 = Agenda20;
    var imgElement = document.getElementById("toggleImage");
    imgElement.src = imgElement.src === img2 ? img2 : img2;
    setActive(!isActive);
  }
  const [isActive, setActive] = useState(false);
  return (
    <section id="agenda" className="agenda">
      <div className="contenedor-boton-agenda">
        <button className="btn-primary btns" onClick={toggleImage}>
          19-oct
        </button>
        <button className="btn-primary btns" onClick={toggleImage2}>
          {" "}
          20-oct{" "}
        </button>
      </div>

      <br />
      <div className="contenedor-imagen-agenda">
        <img
          src={Agenda19}
          id="toggleImage"
          className={isActive ? "your_className" : null}
          alt=""
        />
      </div>
    </section>
  );
}

export default AgendaCam;
