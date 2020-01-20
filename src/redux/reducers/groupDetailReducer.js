const initialState = {
  details: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_GROUP_DETAILS":
      return { ...state, details: payload };
    default:
      return state;
  }
};
