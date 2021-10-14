import React from "react";
let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCENTROAMERICA%2019.png?alt=media&token=15ccdc75-f9ee-48ca-9957-a33e12ec593a";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCENTROAMERICA%2020.png?alt=media&token=d0d3f720-2b06-49ce-a816-db344dfb41b3";

function toggleImage() {
  var img1 = Agenda19;
  var img2 = Agenda20;

  var imgElement = document.getElementById("toggleImage");

  imgElement.src = imgElement.src === img1 ? img2 : img1;
}
function AgendaCam() {
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

export default AgendaCam;
