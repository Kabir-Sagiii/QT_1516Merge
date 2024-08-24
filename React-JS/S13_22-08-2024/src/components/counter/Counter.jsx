import "./Counter.css"; //Integrating CSS
import { useState } from "react";

function Counter() {
  console.log("Counter is called");
  let [state, setState] = useState(0);

  function fnCount() {
    setState(state + 1);

    setState(state + 1);
  }

  return (
    <div className="counter">
      <h2>Count Value is : {state}</h2>
      <br />
      <button onClick={fnCount}>IncCount</button>
    </div>
  );
}

export default Counter;
