import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Cookies from "universal-cookie";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      username: "",
      status: "Entrar",
      code: "",
    };
  }
  inicioSesion(event) {
    event.preventDefault();
    this.setState({
      status: "Enviando...",
    });
    axios({
      method: "post",
      url: "https://distribuidores2021.herokuapp.com/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: this.state,
    })
      .then((response) => {
        const cookies = new Cookies();
        console.log("token", response);
        localStorage.setItem("token", response, JSON.stringify(response.data));
        if (response.data.message === "Auth succesful") {
          //si rebotamos dentro del mismo sitio va este
          console.log("redireccionado");
          window.location.href = "./landing";

          //Si redirigimos va este codigo
          //window.location = "campus.botoxbootcamp.com.mx"
          console.log("Session Iniciada");
          var respuesta = response.data;
          console.log(respuesta.message);
         
          cookies.set("username", respuesta.username, {
            path: "/",
          });

          const userDetails = {
            message: respuesta.message,
          };

          const userSession = {
         
            username: respuesta.username,
          };

          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          localStorage.setItem("userSession", JSON.stringify(userSession));
        } else if (response.data.code === 401) {
          window.location.href = "./ups";
        }
      })
      .catch(function (error) {
        alert(`Favor de verificar los datos ingresado`);
        console.log("The error is : " + error);
        window.location.href = "./ups";
      });
  }
  handleChange(event) {
    const field = event.target.id;
    if (field === "email") {
      this.setState({
        email: event.target.value,
      });
    } else if (field === "password") {
      this.setState({
        password: event.target.value,
      });
    }
  }

  render() {
    let buttonText = this.state.status;
    return (
      <React.Fragment>
        <section className="login">
          <h1>Login</h1>
          <div className="contenedor-login">
            <form
              className="formulario"
              onSubmit={this.inicioSesion.bind(this)}
            >
              <div className="form-grupo">
                
                <input
                  placeholder="Correo electrónico"
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </div>
              <div className="form-grupo">
               
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="currrent-password"
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                  required
                />
              </div>
              <button className="btn-secondary" type="submit">
                {buttonText}
              </button>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default withRouter(Login);
