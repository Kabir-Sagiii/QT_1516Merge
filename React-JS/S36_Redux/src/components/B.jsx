import React from "react";
import { BActionCreator } from "../action/BactionCreator";
import { useDispatch } from "react-redux";
function B() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>B Component</h2>

      <button
        onClick={() => {
          dispatch(BActionCreator("Redux"));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default B;
