import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const currentUser = useSelector(state => state.currentUser);
  const state = useSelector(state => state);
  console.log("state", state);

  const text = currentUser ? (
    <h1>{currentUser.first_name} is currently logged in</h1>
  ) : (
    <h1>Nobody is logged in</h1>
  );
  return <div>{text}</div>;
};

export default Home;
