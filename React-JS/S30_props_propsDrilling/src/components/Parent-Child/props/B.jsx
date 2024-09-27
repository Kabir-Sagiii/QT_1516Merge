import React from "react";
import C from "./C";
function B(props) {
  //props = {data:""}
  return (
    <div>
      <h2>B Component</h2>
      <p>A Data :{props.data} </p>
      <hr />
      <C data={props.data2} />
    </div>
  );
}

export default B;
