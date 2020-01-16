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
        <Route
          exact
          path="/group-details/:id"
          render={props => {
            let groupId = props.location.pathname.replace(
              "/group-details/",
              ""
            );
            return <Component.GroupDetails group={groupId} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default Routes;
