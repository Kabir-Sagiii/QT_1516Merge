import { useReducer } from "react";

const reducer = (state, action) => {
  var newState;
  if (action.type === "add") {
    newState = state + action.value;
  } else if (action.type === "sub") {
    newState = state - action.value;
  } else if (action.type === "mul") {
    newState = state * action.value;
  }

  return newState;
};

function Counter() {
  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>Cout Value is : {state}</h2>
      <button
        onClick={() => {
          dispatch({ type: "add", value: 1 });
        }}
      >
        incCount by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "add", value: 3 });
        }}
      >
        incCount by 3
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub", value: 1 });
        }}
      >
        decCount by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "mul", value: 2 });
        }}
      >
        multiply by 2
      </button>
    </div>
  );
}

export default Counter;
