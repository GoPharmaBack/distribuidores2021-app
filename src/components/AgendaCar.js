import React, { useState } from "react";
let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCaribe  (GMT-4)_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=21c375b9-3eb6-48ab-b639-542aec088d0e";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCaribe  (GMT-4)_AGENDA%20OCTUBRE_DISTRIBUIDORES_19.png?alt=media&token=21c375b9-3eb6-48ab-b639-542aec088d0e";

function AgendaCar() {
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
        <img src={Agenda19} id="toggleImage" alt="" />
      </div>
    </section>
  );
}

export default AgendaCar;
