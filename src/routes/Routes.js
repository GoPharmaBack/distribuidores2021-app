import React, { useState, useEffect } from "react";
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
import Error404 from "../views/404";
import StarfieldAnimation from "react-starfield-animation";
const cookies = new Cookies();

function Routes() {
  let Autorizado = cookies.get("message");
  const [isAuth] = useState(Autorizado);

  useEffect(() => {
    if (isAuth === "Auth succesful") {
      console.log("acceso ✨");
    } else {
      console.log("Sin Acceso 😅");
      localStorage.setItem("lang", "en");
    }
  });

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
        <Route component={Error404} />
      </Switch>

      <StarfieldAnimation
        className="estrellas"
        style={{
        
         
          width: "100%",
          height: "100%",
          backgroundPosition: "top",
          backgroundSize: "fill",
        }}
      />
    </Router>
  );
}

export default Routes;
