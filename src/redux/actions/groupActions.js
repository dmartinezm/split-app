const setGroupsAction = groups => ({
  type: "GET_GROUPS",
  payload: groups
});

const getGroupsFromAPI = () => dispatch => {
  fetch("http://localhost:3000/users/1")
    .then(r => r.json())
    .then(data => {
      dispatch(setGroupsAction(data.groups));
    });
};

export default {
  getGroupsFromAPI
};
