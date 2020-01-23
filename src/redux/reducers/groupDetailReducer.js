const initialState = {
  details: {}
};

export default (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "SET_GROUP_DETAILS":
      return { ...state, details: payload };
    case "CHANGE_GROUP_NAME":
      return {
        ...state,
        details: { ...state.details, name: payload }
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        details: {
          ...state.details,
          expenses: [...state.details.expenses, payload]
        }
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        details: {
          ...state.details,
          expenses: payload
        }
      };
    case "SET_INIT_GROUP_DETAILS":
      return { ...state, details: { ...state.details, expenses: [] } };
    default:
      return state;
  }
};
