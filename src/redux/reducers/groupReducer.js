// const initialState = {
//   groups: []
// };

export default (state = [], { type, payload }) => {
  switch (type) {
    case "GET_GROUPS":
      return payload;
    //   return {
    //     ...state,
    //     //   groups: [...state.groups].concat(payload)
    //     groups: payload
    //   };
    case "GROUP_DETAILS":
      return payload;
    //   return {
    //     ...state,
    //     //   groups: [...state.groups].concat(payload)
    //     group_details: payload
    //   };
    default:
      return state;
  }
};
