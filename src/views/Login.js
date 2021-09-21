import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
//import Cookies from "universal-cookie";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      
      email: "",
      password: "",
      message: "",
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
        console.log("token", response);
        if (response.data.message === "Auth succesful") {
          //si rebotamos dentro del mismo sitio va este
          console.log("acceso")
          this.props.history.push("/landing");
          
          //Si redirigimos va este codigo
          //window.location = "campus.botoxbootcamp.com.mx"
          console.log("Session Iniciada");
          //var respuesta = response.data;
          // cookies.set("message", respuesta.message, {
          //   path: "/",
          // });
          // cookies.set("name", respuesta.name, {
          //   path: "/",
          // });
          // const userDetails = { correo: this.state.email }
          // localStorage.setItem('userDetails', JSON.stringify(userDetails));
          // console.log(userDetails)
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
