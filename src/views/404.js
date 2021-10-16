import React from "react";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <section>
      <h1>Error 404</h1>
      <p>Página no encontrada</p>
      <Link to={"/"}>
        <br />
        <button className="btn-primary">regresa al inicio</button>
      </Link>
    </section>
  );
}

export default Error404;
