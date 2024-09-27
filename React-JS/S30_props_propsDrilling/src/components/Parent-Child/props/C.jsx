import React from "react";
import D from "./D";
function C(props) {
  return (
    <div>
      <h2>C component</h2>
      <p>A Data:{props.data}</p>
      <hr />
      <D info={props.data} />
    </div>
  );
}

export default C;
