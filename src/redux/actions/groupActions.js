const setGroupsAction = groups => ({
  type: "GET_GROUPS",
  payload: groups
});

const setGroupDetails = groupDetails => ({
  type: "GROUP_DETAILS",
  payload: groupDetails
});

const API = "http://localhost:3000/";

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

export default {
  getGroupsFromAPI,
  getGroupDetails
};
