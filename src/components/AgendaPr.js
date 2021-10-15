import React from "react";
let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FPUERTO-RICO%2019.png?alt=media&token=81e29222-cf7b-4828-b959-a59d483486dd";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FPUERTO%20RICO%2020.png?alt=media&token=2139a165-5a92-4b8b-ba64-308dd057938a";

function toggleImage() {
  var img1 = Agenda19;
  var img2 = Agenda20;

  var imgElement = document.getElementById("toggleImage");

  imgElement.src = imgElement.src === img1 ? img2 : img1;
}
function AgendaPr() {
  return (
    <section id="agenda" className="agenda">
      <div className="contenedor-boton-agenda">
        <button className="btn-primary btns" onClick={toggleImage}>
          19-oct
        </button>
        <button className="btn-primary btns" onClick={toggleImage}>
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

export default AgendaPr;
