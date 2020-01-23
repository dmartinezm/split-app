import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector(state => state.currentUser);

  const text = currentUser ? (
    <h1>Welcome {currentUser.user.first_name}</h1>
  ) : (
    <h1>Please login</h1>
  );

  return <div>{text}</div>;
};

export default Dashboard;
