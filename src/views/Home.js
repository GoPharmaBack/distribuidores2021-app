import React from "react";
import { Link } from "react-router-dom";
import Imparables from "../img/imparables.png";
import Evento from "../img/evento.png";
import CountDown from "../components/CountDown";
import LogoHome from "../img/logo.svg";

function Home() {
  return (
    <section className="start">
      <br />
      <img className="img-hero" src={Imparables} alt="Baxter Somos" />
      <br />
      <CountDown />
      <br />
      <br />
      <Link to="/login">
        <button className="btn-primary">Iniciar Sesion</button>{" "}
      </Link>
      <img className="img-hero" src={Evento} alt="Baxter Somos" />
      <br />
      <br />
      <img src={LogoHome} alt="Baxter" />
    </section>
  );
}

export default Home;