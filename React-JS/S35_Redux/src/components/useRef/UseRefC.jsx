import { useRef, useState } from "react";

function UseRefC() {
  let myRef = useRef("QT"); // myRef = {current:"QT"}
  let [state, setState] = useState(0);
  let [city, setCity] = useState("Hyd");

  // var city = "Hyd";

  const display = () => {
    console.log(state, myRef.current);
  };

  // const updateCity = () => {
  //   city = "Pune";
  // };
  return (
    <div>
      <h2>useRef() hook concept :{state}</h2>
      <p>Value of useRef()</p>
      <button
        onClick={() => {
          setState(100);
        }}
      >
        Update State
      </button>

      <button onClick={display}>Print Values</button>
      <button
        onClick={() => {
          myRef.current = "Quality T";
        }}
      >
        Update Ref
      </button>
    </div>
  );
}

export default UseRefC;
