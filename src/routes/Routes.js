
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import Landing from '../views/Landing';
import Error from '../views/Error';

function Routes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/landing" component={Landing}/>
        <Route component={Error} />
      </Switch>
      
    </Router>
  );
}

export default Routes;
