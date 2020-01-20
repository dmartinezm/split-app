const initialState = {
  details: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_GROUP_DETAILS":
      return { ...state, details: payload };
    case "CHANGE_GROUP_NAME":
      return {
        ...state,
        details: { ...state.details, payload }
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        details: {
          ...state.details,
          expenses: [...state.details.expenses, payload]
        }
      };
    default:
      return state;
  }
};
