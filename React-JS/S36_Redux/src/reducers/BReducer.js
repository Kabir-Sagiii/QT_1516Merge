const bReducer = (state = { b: "-------" }, action) => {
  if (action.type === "B") {
    state = {
      b: action.payload,
    };
  }
  return state;
};

export default bReducer;
