import React from "react";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";
import Home from "./Home";

export default function Navbar() {
  return (
    <div className="navbarParent">
      <ul className="flex navbar">
        <li className="logo">Alamin Ahammed</li>
        <li>
          <NavLink to="/" element={<Home />}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/comments" element={<Comments />}>
            Comments
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
