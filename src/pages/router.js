import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SignUp, Login } from "./";

import TabBar from "../components/TabBar";

const Routes = () => (
  <BrowserRouter>
    <TabBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
