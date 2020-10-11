import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TabBar from "../components/TabBar";

import { Home } from "./";

const Routes = () => (
  <BrowserRouter>
    <TabBar />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
