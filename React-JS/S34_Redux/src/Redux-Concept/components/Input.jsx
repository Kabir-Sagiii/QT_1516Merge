import { useState } from "react";
import actionCreator from "../action/action";
import { useDispatch } from "react-redux";

function Input() {
  let [state, setState] = useState("");
  const dispatch = useDispatch();

  const storeDataInAction = () => {
    var actionObj = actionCreator(state);
    dispatch(actionObj);
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
      <button onClick={storeDataInAction}>Submit</button>
    </div>
  );
}

export default Input;
