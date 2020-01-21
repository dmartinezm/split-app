import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const currentUser = useSelector(state => state.currentUser);
  const userGroups = useSelector(state => state.currentUser.user.groups);

  const text = currentUser ? (
    <h1>Welcome {currentUser.user.first_name}</h1>
  ) : (
    <h1>Please login</h1>
  );

  const renderList = () => {
    if (userGroups) {
      return userGroups.map(group => <li key={group.id}>{group.name}</li>);
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
