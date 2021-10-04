import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Cookies from "universal-cookie";
import { FormattedMessage } from "react-intl";

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
      roles: "",
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

          console.log("Session Iniciada");
          var respuesta = response.data;
          console.log(respuesta.message);

          cookies.set("message", respuesta.message, {
            path: "/",
          });
          cookies.set("username", respuesta.username, {
            path: "/",
          });

          cookies.set("roles", respuesta.roles, {
            path: "/",
          });
          cookies.set("rooms", respuesta.rooms, {
            path: "/",
          });

          const userDetails = {
            message: respuesta.message,
            roles: respuesta.roles,
          };

          const userSession = {
            username: respuesta.username,
          };

          const userRoles = {
            roles: respuesta.roles,
          };

          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          localStorage.setItem("userSession", JSON.stringify(userSession));
          localStorage.setItem("userRoles", JSON.stringify(userRoles));
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
                <label> *E-mail: </label>
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
                <label> *password: </label>
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
                <FormattedMessage id="button.start" defaultMessage="Entrar" />
              </button>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default withRouter(Login);
