import React from "react";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="ulnavbar">
        <Link className="lis" to="/">
          <li className="libodynavbar">Home</li>
        </Link>
        <Link className="lis" to="/selection" state={{ from: "if/else" }}>
          <li className="libodynavbar">if/else</li>
        </Link>
        <Link className="lis" to="/selection" state={{ from: "for-loops" }}>
          <li className="libodynavbar">for-loops</li>
        </Link>
        <Link className="lis" to="/selection" state={{ from: "switch-case" }}>
          <li className="libodynavbar">switch-case</li>
        </Link>
        <Link className="lis" to="/selection" state={{ from: "Array Methods" }}>
          <li className="libodynavbar">Array Methods</li>
        </Link>
        <Link
          className="lis"
          to="/selection"
          state={{ from: "Object Methods" }}
        >
          <li className="libodynavbar">Object Methods</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navbar;
