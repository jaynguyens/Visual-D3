import React from "react";
import { Route, Switch } from "react-router-dom";
import Transition from "./components/transition";

const Routes = () => (
  <Switch>
    <Route exact path="/transition">
      <Transition />
    </Route>
  </Switch>
);

export default Routes;
