// A Redux reducer is just a JavaScript function.
// It takes two parameters: the current state and action

// second principle of Redux says the only way to change the state is
// by sending a signal to the store. This signal is an action. So “dispatching an action”
// means sending out a signal to the store.

// third principle of Redux :  prescribes that the state is immutable and cannot change in place.
// reducer must be pure. A pure function is one that returns the exact same output for the given input.

// Remember two key points for avoiding mutations in Redux:

// 1. use concat(), slice(), or the spread operator for arrays
// 2. use Object.assign() or object spread of objects

// const rootReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case "SET_USER":
//       return payload;
//     case "CLEAR_USER":
//       return {};
//     default:
//       return state;
//   }
// };

// export default rootReducer;

const initialState = {
  user: {},
  isLoggedIn: !!localStorage.token
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      // debugger;
      return { ...state, user: action.payload, isLoggedIn: true };

    case "CLEAR_USER":
      return { ...state, user: {}, isLoggedIn: false };
    // case "SET_USER_GROUPS":
    //   return { ...state, myGroups: [...state.myGroups, payload] };
    case "ADD_GROUP":
      // let newArray = state.groups.splice();
      // newArray.splice(action.index, 0, action.item);
      // return newArray;
      // return { ...state, groups: action.payload };
      // return { ...state, groups: [...state.user.groups, action.payload] };
      // groups: [...state.groups, { name: action.payload + "jj" }]
      return {
        ...state,
        user: { ...state.user, groups: [...state.user.groups, action.payload] }
      };

    default:
      return state;
  }
};
