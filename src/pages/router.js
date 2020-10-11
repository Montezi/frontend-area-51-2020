import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SignUp } from "./";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
