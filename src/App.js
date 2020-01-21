import React, { useEffect } from "react";
import "./Styles/App.css";
import Routes from "./Routes";
// import Nav from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "./redux/actions/userActions";
import Theme from "./components/theme";

const App = () => {
  const dispatch = useDispatch();

  // const user = useSelector(state => state.currentUser, {}) || {};
  // const state = useSelector(state => state.currentUser, {}) || {};

  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUser());
    }
  }, [dispatch]);

  return (
    <Router>
      <Theme>
        <Routes />
      </Theme>
    </Router>
  );
};

export default App;
