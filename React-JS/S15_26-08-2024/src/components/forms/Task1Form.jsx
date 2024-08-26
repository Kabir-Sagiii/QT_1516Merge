import { useState } from "react";
import "./Task1form.css";
import TableComp from "./TableComp";

function Task1Form() {
  let [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  const getUser = () => {
    console.log(user);
  };

  const getUserName = (event) => {
    setUser({
      ...user,
      name: event.target.value,
    });
  };

  const getUserPassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const getUserEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  return (
    <div className="containerTask1Form">
      <h2>Assignment Task</h2>
      <div>
        <input type="text" placeholder="username" onChange={getUserName} />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          onChange={getUserPassword}
        />
      </div>
      <div>
        <input type="email" placeholder="emailid" onChange={getUserEmail} />
      </div>
      <div>
        <button onClick={getUser}>Register</button>
      </div>
      <div>
        <TableComp />
      </div>
    </div>
  );
}

export default Task1Form;
