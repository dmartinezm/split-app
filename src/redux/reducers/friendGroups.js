export default (state = [], { type, payload }) => {
  switch (type) {
    case "GET_FRIEND_GROUPS":
      return payload;
    default:
      return state;
  }
};
