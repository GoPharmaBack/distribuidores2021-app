import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Imparables from "../img/imparables.png";
import CountDown from "../components/CountDown";
import { LangContext } from "../context/LangContext";
import Cookies from "universal-cookie";
import Evento from "../img/evento.png";
//imagenes no lenguaje 
import ImagenHero from "../img/img-hero.png"
const cookies = new Cookies();

function logout() {
  cookies.remove("message");
  cookies.remove("rooms");
  window.location.href = "./";
  localStorage.clear();
  localStorage.setItem("lang", "en");
  
  console.log("borrar");
}
var hola = cookies.get("rooms");
var rol = JSON.stringify(cookies.get("roles"));



function Landing() {
  //const idioma = useContext(LangContext);
  //const lang = localStorage.getItem("lang");

  // if (lang) {
  //   if (lang === "es") {
  //     imageLogo = Imparables;
  //     EventImage = Evento;
  //   } else if (lang === "en") {
  //     imageLogo = Unstoppable;
  //     EventImage = Event;
  //   } else {
  //     imageLogo = Unstoppable;
  //     EventImage = Event;
  //   }
  // }

  return (
    <>
      <section className="landing-hero">
      
     <div className="contenedor">
       
     <div className="left">
          <img className="img-hero" src={Imparables} alt="Baxter Somos" />
  
          <ul className="horarios">
            <li>
              09:00 h <span> Centroamérica</span>
            </li>
            <li>
              09:00 h <span> México</span>
            </li>
            <li>
              09:00 h <span> Puerto Rico</span>
            </li>
          </ul>
          
          <CountDown />
        </div>
        <div  className="right">
          <img className="img-hero"  src={ImagenHero} alt="img" />
        </div>
     
       
       </div> 
       <div className="savethedate">
         <p>SAVE THE DATE</p>
         <h2>19 - 21 OCTUBRE</h2>
         <img className="img-landing" src={Evento} alt="" />
       </div>
       </section>
      <section>
       
        <button onClick={logout}>logout</button>
      </section>
    </>
  );
}

export default withRouter(Landing);
