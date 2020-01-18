import React, { useEffect } from "react";
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
  const user = useSelector(state => state.currentUser);

  useEffect(() => {
    // dispatch(groupActions.getGroupsFromAPI());
    if (localStorage.token) {
      dispatch(userActions.persistUserFromAPI());
      // dispatch(groupActions.getGroupsFromAPI(user.id));
    }
  }, []);

  return (
    <Router>
      <Theme>
        <Routes />
      </Theme>
    </Router>
  );
};

export default App;
