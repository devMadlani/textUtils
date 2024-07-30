import React from "react";
import { Outlet, Link } from "react-router-dom";

function UseState() {
  return (
    <div>
      <h3>useState Page</h3>
      <ul>
        <li>
          <Link to="counter">Simple Counter</Link>
          <br />
          <Link to="objectState">Object As State</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default UseState;
