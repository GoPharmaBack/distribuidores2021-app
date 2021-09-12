import React from "react";
import {withRouter} from "react-router-dom"
import Imparables from "../img/imparables.png";
import CountDown from "../components/CountDown";
function Landing() {
  
  return (

   <>
    <section>
      
    <div className="left">
    <img className="img-hero" src={Imparables} alt="Baxter Somos" />
      <ul>
        <li>time:place</li>
        <li>time:place</li>
        <li>time:place</li>
        <li>time:place</li>
      </ul>
      <CountDown/>
    </div>
    <div className="right">
      <img src="/" alt="img"/>
    </div>
    </section>
    <section>
      <h2>Section2</h2>
    </section>
   </>
  );
}

export default withRouter (Landing);
