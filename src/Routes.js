import React from "react";
import { Switch, Route } from "react-router-dom";
import Component from "./components";

const Routes = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Component.Home} />
        <Route path="/login" component={Component.Login} />
        <Route path="/signup" component={Component.Signup} />
        <Route path="/dashboard" component={Component.Dashboard} />
      </Switch>
    </div>
  );
};

export default Routes;
