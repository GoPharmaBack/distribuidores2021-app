import React,{useRef,useState} from "react";



function CountDown() {
const[timerDays,setTimerDays]=useState('00')
const[timerHours,setTimerHours]=useState('00')
const[timerMinutes,setTimerMinutes]=useState('00')
const[timerSeconds,setTimerDaysSecond]=useState('00')

  
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
