import "./Counter.css"; //Integrating CSS
import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0); //1

  function fnCount() {
    setState(state + 1); //1 re---render

    // setState(()=>)

    setState(state + 1); //2 - re-render
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
