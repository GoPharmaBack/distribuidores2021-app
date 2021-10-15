import React from "react";
let Agenda19 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCARIBE%2019.png?alt=media&token=f1700ae5-6b97-4c36-9396-dd7bfd833a26";

let Agenda20 =
  "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/AGENDA%2FCARIBE%2020.png?alt=media&token=f9331069-76ff-4519-8d34-c0f135f37e61";

function toggleImage() {
  var img1 = Agenda19;
  var img2 = Agenda20;

  var imgElement = document.getElementById("toggleImage");

  imgElement.src = imgElement.src === img1 ? img2 : img1;
}
function AgendaCar() {
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

export default AgendaCar;
