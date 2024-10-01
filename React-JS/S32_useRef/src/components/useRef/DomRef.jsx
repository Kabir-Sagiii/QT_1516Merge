import { useRef } from "react";

function DomRef() {
  let h2Ref = useRef(null); // h2Ref = {current:h2DOMElement}
  let myref = useRef(null);

  const changeStyle = () => {
    //DOM of h2
    var h2DomElement = h2Ref.current;
    h2DomElement.style.color = "red";

    myref.current.style.color = "blue";
  };
  return (
    <div>
      <h2 ref={h2Ref}>Dom Manipulation using useRef()</h2>
      <button ref={myref} onClick={changeStyle}>
        Change Color
      </button>
    </div>
  );
}

export default DomRef;
