const API = "http://localhost:3000/";

const setFriends = friends => ({
  type: "GET_FRIENDS",
  payload: friends
});

const getFriendsFromAPI = (userId = 1) => dispatch => {
  fetch(API + `frienships/${userId}`)
    .then(r => r.json())
    .then(data => {
      debugger;
      dispatch(setGroupsAction(data.groups));
    });
};

const addFriend = friend => ({
  type: "ADD_FRIEND",
  payload: friend
});

const addFriendToAPI = (userId = 1, friendId = 2) => dispatch => {
  fetch(API + "newfriend/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ user_id: 1, name: group_name })
  })
    .then(r => r.json())
    .then(data => {
      //   debugger;
      dispatch(addGroup(data));
    })
    .catch(console.error);
};

export default {
  getFriendsFromAPI,
  addFriendToAPI
};
