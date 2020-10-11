import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SignUp, Login } from "./";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
