const myReducer = (state = "Dummy", action) => {
  if (action.type === "NAME") {
    state = action.payload;
  }
  return state;
};

export default myReducer;
