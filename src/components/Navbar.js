import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

let navLinks = [
  { title: "Paginated", to: "/home" },
  { title: "Infinite", to: "/infinite-query" },
  { title: "Mutation", to: "/mutation" },
];

const NavBarRoot = styled.div`
  max-width: 300px;
  width: 100%;
  border-right: 1px solid rgb(230 230 230);
  margin: 0;
  ul {
    list-style: none;
    li {
      display: block;
      margin-bottom: 10px;
      a {
        display: block;
        color: rgb(0 0 0);
        text-decoration: none;
        padding: 5px 10px;
        &.active {
          color: rgb(255 62 0);
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavBarRoot>
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <NavLink to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </NavBarRoot>
  );
};

export default Navbar;
