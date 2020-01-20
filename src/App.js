import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import Routes from "./Routes";
// import Nav from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userActions from "./redux/actions/userActions";
import groupActions from "./redux/actions/groupActions";
import Theme from "./components/theme";

const App = () => {
  // const username = useSelector(state => state.userObj.username)
  // console.log("token?", localStorage.token);
  // const state = useSelector(state => {
  //   return {
  //     user: state.currentUser
  //   };
  // });

  const dispatch = useDispatch();
  const loggedUser = localStorage.userId;

  // const user = useSelector(state => state.currentUser, {}) || {};
  // const state = useSelector(state => state.currentUser, {}) || {};
  // console.log("APP get state before useEffect", state);
  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUser());
    }
  }, []);

  // console.log("APP get state after useEffect", state);
  // const [loggedUser, setLoggedUser] = useState(1);

  // const setUser = () => {
  //   setLoggedUser(user.id);
  // };

  return (
    <Router>
      <Theme>
        <Routes />
      </Theme>
    </Router>
  );
};

export default App;
