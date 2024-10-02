import { useReducer } from "react";
const reducerFn = (state, action) => {
  if (action.type === "INC") {
    state = state + action.count;
  } else {
    state = state - action.count;
  }

  return state;
};

function UseREducerComp() {
  let [state, dispatch] = useReducer(reducerFn, 0);
  return (
    <div>
      <h2>Count Value is :{state}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INC", count: 1 });
        }}
      >
        IncCount by 1
      </button>

      <button
        onClick={() => {
          dispatch({ type: "INC", count: 3 });
        }}
      >
        IncCount by 3
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DEC", count: 1 });
        }}
      >
        decCount
      </button>
    </div>
  );
}

export default UseREducerComp;
