import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Paginated
          </NavLink>
        </li>
        <li>
          <NavLink to="/infinite-query" activeClassName="active">
            Infinite
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
