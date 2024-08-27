import { useState } from "react";

function State() {
  let [state, setState] = useState();

  const printStateValue = () => {
    alert(state);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Update State with Input Data</h2>
      {/* <input
        onChange={(event) => {
          var inputDomElement = event.target;
          var inputValue = inputDomElement.value;

          setState(inputValue);
        }}
      /> */}

      <input
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={printStateValue}>Submit</button>
    </div>
  );
}

export default State;
