export default (state = [], { type, payload }) => {
  switch (type) {
    case "GET_GROUPS":
      return payload;
    case "GROUP_DETAILS":
      return payload;
    default:
      return state;
  }
};
