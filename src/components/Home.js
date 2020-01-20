import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

const Home = () => {
  const currentUser = useSelector(state => state.currentUser);
  const userGroups = useSelector(state => state.currentUser.user.groups);

  const state = useSelector(state => state);
  console.log(state);
  console.log(currentUser);

  // const userGroups = useSelector(state => state.currentUser.groups);

  const text = currentUser ? (
    <h1>Welcome {currentUser.user.first_name}</h1>
  ) : (
    <h1>Please login</h1>
  );

  const renderList = () => {
    if (userGroups) {
      return userGroups.map(group => <li>{group.name}</li>);
    }
  };
  return (
    <div>
      {text}
      {renderList()}
    </div>
  );
};

export default Home;
