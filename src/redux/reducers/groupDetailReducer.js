const initialState = {
  details: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_GROUP_DETAILS":
      return { ...state, details: payload };
    case "CHANGE_GROUP_NAME":
      return { ...state, name: payload.name };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            group_id: state.groupId,
            name: "Test",
            description: "Test desc",
            amount: "100.99"
          }
        ]
      };
    default:
      return state;
  }
};
