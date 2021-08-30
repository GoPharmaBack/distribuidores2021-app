import React from "react";
import Imparables from "../img/imparables.png";
import Evento from "../img/evento.png";
import CountDown from "../components/CountDown";
function Home() {
  return (
    <section className="start">
      <br />
      <img className="img-hero" src={Imparables} alt="Baxter Somos" />
      <br />
      <CountDown />

      <img className="img-hero" src={Evento} alt="Baxter Somos" />
      {/*  <button className="btn-primary">Entrar</button>  */}
    </section>
  );
}

export default Home;
