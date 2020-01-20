const initialState = {
  expenses: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_EXPENSES":
      return [...state, payload];
    default:
      return state;
  }
};
