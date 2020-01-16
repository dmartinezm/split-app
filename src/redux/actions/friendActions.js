const API = "http://localhost:3000/";

const setFriends = friends => ({
  type: "GET_FRIENDS",
  payload: friends
});

const getFriendsFromAPI = (userId = 1) => dispatch => {
  fetch(API + `users/${userId}`)
    .then(r => r.json())
    .then(data => {
      //   debugger;
      dispatch(setGroupsAction(data.groups));
    });
};
