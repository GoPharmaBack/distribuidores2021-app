import logo from './logo.svg';
import Imparables from "./img/imparables.png";
import Evento from "./img/evento.png";
import CountDown from "./components/CountDown";
import "./scss/Index.scss";

function App() {
  return (
    <div className="App">
      <section className="start">
         <img src={logo} alt="Baxter Somos" /> 
        <br />
        <img className="img-hero" src={Imparables} alt="Baxter Somos" />
<br/>
        <CountDown />
       
        <img className="img-hero" src={Evento} alt="Baxter Somos" />
        {/*  <button className="btn-primary">Entrar</button>  */}
      </section>
     
    </div>
  );
}

export default App;
