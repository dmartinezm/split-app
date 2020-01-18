export default (state = [], { type, payload }) => {
  switch (type) {
    case "SET_GROUP_DETAILS":
      return payload;
    default:
      return state;
  }
};
