import React, { useState } from "react";
let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FMEXICO%2019.png?alt=media&token=a0687f19-1b65-4041-9c65-ac0647557f4e";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FMEXICO%2020.png?alt=media&token=50c773b1-7e92-436f-b6cb-7a9135d1e450";

function AgendaCarEng() {
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
    <section  className="agenda">
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

export default AgendaCarEng;
