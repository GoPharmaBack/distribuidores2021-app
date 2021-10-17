import React from "react";

import { FormattedMessage } from "react-intl";

function ContactosBaxter() {
  
  
  return <>
  <div  className="col">
      <img src={"https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FRoxana_Garduno.png?alt=media&token=1ed613db-6c4b-49f5-9b51-a27e977d5810"} alt="contacto" />
      <br/>
      <div className="texto">

        <div className="titulo">Roxana Garduño</div>
        <div className="cargo"><FormattedMessage id="puesto.ba" /></div>
        <div className="correo">roxana_garduno@baxter.com</div>
        <div className="numero">tel: 55 8068 4053</div>
      </div>
    </div>
    <div className="col">
      <img src={"https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FJesus_Romero.png?alt=media&token=106eda54-c96b-41aa-8a04-ed95fa751fac"} alt="contacto" />
      <br/>
      <div className="texto">
        <div className="titulo">Jesús Romero</div>
        <div className="cargo"><FormattedMessage id="puesto.bb" /></div>
        <div className="correo">jesus_romero@baxter.com</div>
        
      </div>
    </div>
    <div  className="col">
      <img src={"https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PONENTES%2FGabriel_Coeto.png?alt=media&token=dbc00d34-d07d-4619-9871-147e8e84d3dd"} alt="contacto" />
      <br/>
      <div className="texto">
        <div className="titulo">Gabriel Coeto</div>
        <div className="cargo"><FormattedMessage id="puesto.bc" /></div>
        <div className="correo">gabriel_coeto_vazquez@baxter.com</div>
      
      </div>
    </div>
  </>;
}

export default ContactosBaxter;
