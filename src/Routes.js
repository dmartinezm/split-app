import React from "react";
import { Switch, Route } from "react-router-dom";
import Component from "./components";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Done from "./components/Auth/Done";
import Dashboard from "./components/Dashboard";

const Routes = () => {
  return (
    <div className="main">
      <Switch>
        {/* <Route exact path="/" component={Component.Home} /> */}
        {/* <Route path="/login" component={Component.Login} /> */}
        {/* <Route path="/signup" component={Component.Signup} /> */}
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
        <Route path="/friends" component={Component.Friends} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/done" component={Done} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </div>
  );
};

export default Routes;
