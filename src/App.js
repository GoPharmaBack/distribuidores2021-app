//import logo from './logo.svg';
import Imparables from "./img/imparables.png";
import Evento from "./img/evento.png";
import CountDown from "./components/CountDown";
import "./scss/Index.scss";

function App() {
  return (
    <div className="App">
      <section>
        {/* <img src={logo} alt="Baxter Somos" /> */}
        <img className="img-hero" src={Imparables} alt="Baxter Somos" />

        <CountDown />
        {/* <button className="btn-primary">Entrar</button> */}
        
        <img src={Evento} alt="Baxter Somos" />
      </section>
      <section>
        <h2>section 2</h2>
      </section>
      <section>section 3</section>
    </div>
  );
}

export default App;
