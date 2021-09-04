import React from "react";

function Login() {
  return (
    <section>
      <h1>LOGIN</h1>
      <form action="post">
        <div className="grupo-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=" email"
            id="emailform"
            placeholder="escriba su correo"
          />
        </div>

        <div className="grupo-form">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="passwordform"
            placeholder="escriba su contraseña"
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Login;
