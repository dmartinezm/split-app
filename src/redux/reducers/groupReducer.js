export default (state = [], { type, payload }) => {
  switch (type) {
    case "GET_GROUPS":
      return payload;
    default:
      return state;
  }
};
