import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import currentUser from "../reducers/userReducer";
import selectedGroup from "../reducers/groupDetailReducer";
import friends from "../reducers/friendReducer";

const rootReducer = combineReducers({
  currentUser: currentUser,
  groupDetails: selectedGroup,
  friends: friends
});
// reducers produce the state of your application.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
