const API = "http://localhost:3000/";

const setGroupDetailAction = gDetails => ({
  type: "SET_GROUP_DETAILS",
  payload: gDetails
});

const getGroupDetailsFromAPI = groupId => dispatch => {
  fetch(API + `groups/${groupId}`)
    .then(r => r.json())
    .then(data => {
      // debugger;
      dispatch(setGroupDetailAction(data));
    });
};

export default {
  getGroupDetailsFromAPI
};
