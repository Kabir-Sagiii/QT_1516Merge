import "./Counter.css"; //Integrating CSS
import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0); //default or initial or first value

  function fnCount() {
    setState(state + 1);
  }

  // const fnCount = () => {

  //   countValue++;
  //   console.log(countValue);

  //   var domh2 = document.querySelector("h2");
  //   // domh2.innerText = "Count Value is " + countValue;
  //   domh2.innerText = `Count Value is ${countValue}`;
  // };

  return (
    <div className="counter">
      <h2>Count Value is : {state}</h2>
      <br />
      <button onClick={fnCount}>IncCount</button>
    </div>
  );
}

export default Counter;
