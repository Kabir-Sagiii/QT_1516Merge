const firstReducer = (state = { a: "-------" }, action) => {
  if (action.type === "A") {
    state = {
      ...state,
      a: action.payload,
    };
  }

  return state;
};
export default firstReducer;
