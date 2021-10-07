import React,{useEffect} from "react";
import { Link } from "react-router-dom";
function Sucess() {
  useEffect(() => {
    ocultar();
  });
  function ocultar() {
    document.getElementById("navScr").style.display = "none";
  }
  return (

    <section>
      <h1>Ups 😢</h1>
      <Link to="/">regresa al inicio</Link>
    </section>
  );
}

export default Sucess;
