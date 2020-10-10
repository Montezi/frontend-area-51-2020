import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
