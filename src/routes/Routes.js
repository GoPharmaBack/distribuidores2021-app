import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Error from "../views/Error";
import Navbar from "../components/NavBar/NavBar";
import ProtectedRoutes from "./ProtectedRoutes";
import Mexico from "../views/SalaMx";
import Cam from "../views/SalaCam";
import Car from "../views/SalaCar";
import Pr from "../views/SalaPr";
import ScrollToTop from "../components/ScrollToTop";
import Cookies from "universal-cookie";
import Sucess from "../views/Sucess";
const cookies = new Cookies();

function Routes() {
  let Autorizado = cookies.get("message");
  const [isAuth] = useState(Autorizado);

  if (isAuth === "Auth succesful") {
    console.log("acceso ✨");
  } else {
    console.log("Sin Acceso 😅");
    localStorage.setItem("lang", "en");
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />

        <ProtectedRoutes path="/landing" component={Landing} isAuth={isAuth} />
        <ProtectedRoutes path="/mx" component={Mexico} isAuth={isAuth} />
        <ProtectedRoutes path="/cam" component={Cam} isAuth={isAuth} />
        <ProtectedRoutes path="/car" component={Car} isAuth={isAuth} />
        <ProtectedRoutes path="/pr" component={Pr} isAuth={isAuth} />

        <Route exact path="/ups" component={Error} />
        <Route exact path="/sucess" component={Sucess} />
      </Switch>
    </Router>
  );
}

export default Routes;
