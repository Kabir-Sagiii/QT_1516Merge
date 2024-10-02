import { useState } from "react";
import actionCreator from "../action/action";
import { useDispatch } from "react-redux";

function Input() {
  let [state, setState] = useState("");
  let dispatch = useDispatch();
  const callActionCreator = () => {
    // var actionObj = actionCreator(state);
    // dispatch(actionObj);

    dispatch(actionCreator(state));
  };

  return (
    <div>
      <h2>Input Data</h2>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="enter text"
      />
      <button onClick={callActionCreator}>Submit</button>
    </div>
  );
}

export default Input;
