import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Error from "../views/Error";
import ProtectedRoutes from "./ProtectedRoutes";


 
function Routes() {

  const [isAuth,setIsAuth] = useState(true)
if (setIsAuth === "Auth succesful"){
  console.log("hola");
}else {
  console.log("adios")
}

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/landing" component={Landing} /> */}
        <ProtectedRoutes path="/landing" component={Landing} isAuth={isAuth} />
        
        <Route exact path="/ups" component={Error} />
        
      </Switch>
    </Router>
  );
}

export default Routes;
