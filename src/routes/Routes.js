import React ,{ useState }from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "../views/Home";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Error from "../views/Error";
import ProtectedRoutes from "./ProtectedRoutes";
import Mexico from "../views/SalaMx"
import Cookies from "universal-cookie";
const cookies = new Cookies();
 
function Routes() {
 
  let x =  cookies.get('message')
  const [isAuth] = useState(x)

 if (isAuth === "Auth succesful"){
   console.log("acceso ✨");
 }else {
   console.log("Acceso Fail 🤨")
 }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <ProtectedRoutes path="/landing" component={Landing} isAuth={isAuth}/>
        <ProtectedRoutes path="/mx" component={Mexico} isAuth={isAuth}/>
        
        <Route exact path="/ups" component={Error} />
        
      </Switch>
    </Router>
  );
}

export default Routes;
