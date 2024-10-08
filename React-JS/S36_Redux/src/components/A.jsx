import React from "react";
import { AactionCreator } from "../action/AActionCreator";
import store from "../store/Store";
function A() {
  const getAData = () => {
    var actionobj = AactionCreator("React");
    store.dispatch(actionobj);
  };
  return (
    <div>
      <h2>A Component</h2>

      <button onClick={getAData}>Submit</button>
    </div>
  );
}

export default A;
