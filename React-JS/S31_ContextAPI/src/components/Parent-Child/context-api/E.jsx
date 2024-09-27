import { useContext } from "react";
import mycontext from "./context";
function E() {
  let { name, city } = useContext(mycontext);
  return (
    <div>
      <h2>E Component</h2>

      <dl>
        <dt>
          <b>NAME</b>
        </dt>
        <dd>{name}</dd>
        <dt>
          <b>City</b>
        </dt>
        <dd>{city}</dd>
      </dl>
    </div>
  );
}

export default E;
