import { useState } from "react";
import mycontext from "./context";
import B from "./B";

function A() {
  let [data, setData] = useState({
    name: "Siddharath",
    city: "Indore",
  });
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setData({ name: "Jiya", city: "Delhi" });
        }}
      >
        Update User
      </button>
      <hr />
      <mycontext.Provider value={data}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
