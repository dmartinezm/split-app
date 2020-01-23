const initialState = {
  groups: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_GROUPS":
      return { ...state, groups: action.payload };
    case "ADD_GROUP":
      // let newArray = state.groups.splice();
      // newArray.splice(action.index, 0, action.item);
      // return newArray;
      // return { ...state, groups: action.payload };
      return {
        ...state,
        groups: [...state.currentUser.user.groups, action.payload]
      };
    // return { ...state, groups: [action.payload] };

    default:
      return state;
  }
};
