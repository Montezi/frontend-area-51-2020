import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SignUp } from "./";

import TabBar from "../components/TabBar";

const Routes = () => (
  <BrowserRouter>
    <TabBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
