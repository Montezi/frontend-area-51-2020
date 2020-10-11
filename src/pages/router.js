import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SignUp } from "./";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
