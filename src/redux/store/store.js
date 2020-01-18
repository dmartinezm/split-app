import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import currentUser from "../reducers/userReducer";
import userGroups from "../reducers/groupReducer";
import friends from "../reducers/friendReducer";
import friendGroups from "../reducers/friendGroups";
import selectedGroup from "../reducers/groupDetailReducer";
// You may also pass an initial state to createStore, useful for server side rendering and state preloading

const rootReducer = combineReducers({
  currentUser: currentUser,
  myGroups: userGroups,
  myFriends: friends,
  friendGroups: friendGroups,
  groupDetails: selectedGroup
});
// reducers produce the state of your application.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
