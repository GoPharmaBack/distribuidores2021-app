import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

useEffect(()=>{
  if(localStorage.getItem('user-info')){
    history.push("/landing")
  }
})

function login (){

}

  return (
    <section className="login">
      <h1>Login</h1>
      <div className="contenedor-login">
        <form action="" className="formulario">
          <div className="form-grupo">
            <label htmlFor="">Email: </label>
            <input type="text"  name="email@baxter.com" id="nombre" />
          </div>
          <div className="form-grupo">
            <label htmlFor="">Password: </label>
            <input type="text"  name="Nombre" id="nombre" />
          </div>

          <input onClick={login} className="btn-secondary" type="submit" value="enviar" />
          
        </form>
      </div>
    </section>
  );
}

export default Login;
