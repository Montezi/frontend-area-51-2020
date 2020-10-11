import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp, Login } from "./";

const Routes = () => (
  <Switch>
    <Route path="/Login" component={Login} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;
