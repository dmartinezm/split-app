const API = "http://localhost:3000/";

const setGroupsAction = groups => ({
  type: "GET_GROUPS",
  payload: groups
});

const addGroup = newGroup => ({
  type: "ADD_GROUP",
  payload: newGroup
});

const clearGroupAction = () => ({
  type: "CLEAR_GROUPS"
});

const logoutUser = () => dispatch => {
  dispatch(clearGroupAction());
  localStorage.clear();
};

const getGroupsFromAPI = userId => dispatch => {
  fetch(API + `users/${userId}`)
    .then(r => r.json())
    .then(data => {
      // debugger;
      dispatch(setGroupsAction(data.groups));
    });
};

const addGroupToAPI = (userid, group_name) => dispatch => {
  fetch(API + "newgroup/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ user_id: userid, name: group_name })
  })
    .then(r => r.json())
    .then(data => {
      // dispatch(addGroup(data.groups[data.groups.length - 1]));
      dispatch(addGroup(data.groups));
    })
    .catch(console.error);
};

export default {
  getGroupsFromAPI,
  addGroupToAPI,
  logoutUser
};
