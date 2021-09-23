import React ,{ useState }from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "../views/Home";
import Login from "../views/Login";
import Landing from "../views/Landing";
import Error from "../views/Error";
import ProtectedRoutes from "./ProtectedRoutes";
import Mexico from "../views/SalaMx"

 
function Routes() {
 
  let x =  localStorage.getItem("userDetails")
   console.log(x)
  const [isAuth,setIsAuth] = useState(x)
 if (setIsAuth === "Auth succesful"){
   console.log("veridicado");
 }else {
   console.log("no verificado")
 }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/landing" component={Landing} /> */}
        {/* isAuth={isAuth} */}
        <ProtectedRoutes path="/landing" component={Landing} isAuth={isAuth}/>
        <ProtectedRoutes path="/mx" component={Mexico} isAuth={isAuth}/>
        
        <Route exact path="/ups" component={Error} />
        
      </Switch>
    </Router>
  );
}

export default Routes;
