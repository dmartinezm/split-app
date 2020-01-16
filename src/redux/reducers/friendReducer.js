export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_FRIENDS":
      return payload;
    case "ADD_FRIEND":
      return [...state, payload];
    default:
      return state;
  }
};
