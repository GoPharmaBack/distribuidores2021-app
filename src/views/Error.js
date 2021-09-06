import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <section>
      <h1>Ups 😢</h1>
      <Link to="/">regresa al inicio</Link>
    </section>
  );
}

export default Error;
