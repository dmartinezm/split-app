const API = "http://localhost:3000/";

const setGroupsAction = groups => ({
  type: "GET_GROUPS",
  payload: groups
});

const setGroupDetails = groupDetails => ({
  type: "GROUP_DETAILS",
  payload: groupDetails
});

const addGroup = newGroup => ({
  type: "ADD_GROUP",
  payload: newGroup
});

const getGroupsFromAPI = (userId = 1) => dispatch => {
  fetch(API + `users/${userId}`)
    .then(r => r.json())
    .then(data => {
      //   debugger;
      dispatch(setGroupsAction(data.groups));
    });
};

const getGroupDetails = (groupId = 1) => dispatch => {
  fetch(API + `groups/${groupId}`)
    .then(r => r.json())
    .then(data => {
      //   debugger;
      dispatch(setGroupDetails(data));
    });
};

const addGroupToAPI = group_name => dispatch => {
  fetch(API + "newgroup/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ user_id: 1, name: group_name })
  })
    .then(r => r.json())
    .then(data => {
      // debugger;
      dispatch(addGroup(data.groups[data.groups.length - 1]));
    })
    .catch(console.error);
};

export default {
  getGroupsFromAPI,
  getGroupDetails,
  addGroupToAPI
};
