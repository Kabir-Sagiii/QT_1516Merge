import { useReducer } from "react";
const reducerFn = () => {
  //Logic to update state

  return;
};
function UseREducerComp() {
  let [state, dispatch] = useReducer(reducerFn, 999);
  return (
    <div>
      <h2>useReducer() concept : {state}</h2>
    </div>
  );
}

export default UseREducerComp;
