import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import groupActions from "../redux/actions/groupActions";

const Dashboard = () => {
  const [modalState, setModalState] = useState(false);

  const show = () => {
    setModalState({
      modalState: true
    });
  };

  const groups = useSelector(state => state.groups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(groupActions.getGroupsFromAPI());
  }, []);

  console.log(groups);
  const groupList = () => {
    return groups.map(group => <li>{group.name}</li>);
  };
  return (
    <div>
      <h1>Dash</h1>
      {groupList()}
    </div>
  );
};

export default Dashboard;
