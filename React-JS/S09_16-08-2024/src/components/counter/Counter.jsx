import React from "react";
import "./Counter.css";
function Counter() {
  var countValue = 0;

  const fnCount = () => {
    countValue++;
    console.log(countValue);
  };

  return (
    <div className="counter">
      <h2>Count Value is : {countValue}</h2>
      <br />
      <button onClick={fnCount}>IncCount</button>
    </div>
  );
}

export default Counter;
