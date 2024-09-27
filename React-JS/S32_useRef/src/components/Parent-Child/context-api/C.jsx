import { useContext } from "react";
import mycontext from "./context";
import D from "./D";
function C() {
  let { name, city } = useContext(mycontext);
  return (
    <div>
      <h2>
        C Component :{name} :{city}
      </h2>
      <hr />
      <D />
    </div>
  );
}

export default C;
