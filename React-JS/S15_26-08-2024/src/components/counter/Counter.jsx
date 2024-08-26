import "./Counter.css"; //Integrating CSS
import { useState } from "react";

function Counter() {
  console.log("Counter is called");
  let [state, setState] = useState(0);

  function fnCount() {
    // setState(state + 5);

    setState(function (currentState) {
      //0
      return currentState + 1; //0 + 1 // state = 1
    });

    setState(function (currentState) {
      //1
      return currentState + 1; //1+1 = 2
    });
  }

  function fnDecCount() {
    setState((currentState) => {
      //10
      return currentState - 1; //10-1= 9
    });

    setState((currentState) => {
      return currentState - 5; //9-5 = 4
    });
  }

  return (
    <div className="counter">
      <h2>Count Value is : {state}</h2>
      <br />
      <button onClick={fnCount}>incCount</button>

      <button onClick={fnDecCount}>decCount</button>
    </div>
  );
}

export default Counter;
