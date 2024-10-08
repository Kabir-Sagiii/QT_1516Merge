import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70px",
        background: "black",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "50px",
          textDecoration: "none",
          fontSize: "21px",
        }}
      >
        Home
      </Link>
      <Link
        to="/result"
        style={{
          color: "white",
          marginRight: "50px",
          textDecoration: "none",
          fontSize: "21px",
        }}
      >
        Results
      </Link>
    </div>
  );
}

export default Nav;
