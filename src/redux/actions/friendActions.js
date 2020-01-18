const API = "http://localhost:3000/";

const setFriends = friends => ({
  type: "GET_FRIENDS",
  payload: friends
});

const setFriendGroups = groups => ({
  type: "GET_FRIEND_GROUPS",
  payload: groups
});

const getFriendsFromAPI = (userId = 1) => dispatch => {
  fetch(API + `users/${userId}`)
    .then(r => r.json())
    .then(data => {
      debugger;
      dispatch(setFriends(data.friends));
      dispatch(setFriendGroups(data.group_with));
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
    body: JSON.stringify({ user_id: 1, name: "" })
  })
    .then(r => r.json())
    .then(data => {
      //   debugger;
      dispatch(addFriend(data));
    })
    .catch(console.error);
};

export default {
  getFriendsFromAPI,
  addFriendToAPI
};
