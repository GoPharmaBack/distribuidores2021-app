import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Error() {
  useEffect(() => {
    ocultar();
  });
  function ocultar() {
    document.getElementById("navScr").style.display = "none";
  }
  return (
    <section className="error">
      <div className="contenedor">
        <h1>Ups 😢</h1>
        <Link className="btn btn-primary" style={{ color: "white" }} to="/">
          <p>regresa al inicio</p>
        </Link>
      </div>
    </section>
  );
}

export default Error;
