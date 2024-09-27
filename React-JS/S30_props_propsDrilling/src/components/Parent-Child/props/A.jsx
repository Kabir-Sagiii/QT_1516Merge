import { useState } from "react";
import B from "./B";
function A() {
  const [state, setState] = useState("QT");
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("React JS with Props");
        }}
      >
        Send Data
      </button>
      <hr />
      <B data={state} />
    </div>
  );
}

export default A;
