import React from "react";
import { Route, Switch } from "react-router-dom";
import Transition from "./components/transition";
import DelayElements from "./components/delayElements";
import AxisTransition from "./components/axisTransition";

const Routes = () => (
  <Switch>
    <Route exact path="/transition">
      <Transition />
    </Route>
    <Route exact path="/delay">
      <DelayElements />
    </Route>
    <Route exact path="/axis">
      <AxisTransition />
    </Route>
  </Switch>
);

export default Routes;
