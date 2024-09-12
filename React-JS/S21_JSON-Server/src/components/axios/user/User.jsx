import React from "react";
import "./User.css";
function User({ user }) {
  return (
    <div className="cardUser">
      <img src={user.picture.medium} width={"100%"} height={"200"} />
      <h3>
        {user.name.title}.{user.name.first}
        {user.name.last}
      </h3>
      <p>{user.gender}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit.</p>
      <button>User Details</button>
    </div>
  );
}

export default User;
