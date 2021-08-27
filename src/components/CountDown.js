import React from "react";



function CountDown() {

  
  return (
    <div className="contador">
      <br />
      <div className="contenedor-contador">
        <div className="col">
          <span>24</span>
          <p>Días</p>
        </div>
        <div className="col">
          <span>24</span>
          <p>Horas</p>
        </div>
        <div className="col">
          <span>24</span>
          <p>Minutos</p>
        </div>
        <div className="col">
          <span>24</span>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
