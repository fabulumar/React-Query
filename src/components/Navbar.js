import React from "react";
import { NavLink } from "react-router-dom";

let navLinks = [
  { title: "Paginated", to: "/home" },
  { title: "Infinite", to: "/infinite-query" },
  { title: "Mutation", to: "/mutation" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <NavLink to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
