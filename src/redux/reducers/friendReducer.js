export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_FRIENDS":
      return payload;
    default:
      return state;
  }
};
