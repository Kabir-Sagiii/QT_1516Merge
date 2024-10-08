import React from "react";
import { useSelector } from "react-redux";
function Display() {
  let storedata = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>Display Component</h2>
      <p>a :{storedata.firstReducer.a}</p>
      <p>b :{storedata.bReducer.b}</p>
    </div>
  );
}

export default Display;
