import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

let navLinks = [
  { title: "Paginated", to: "/home" },
  { title: "Infinite", to: "/infinite-query" },
  { title: "Mutation", to: "/mutation" },
];

const NavBarRoot = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0px" : "-300px")};
  height: 100%;
  width: 300px;
  border-right: 1px solid rgb(230 230 230);
  margin: 0;
  padding-top: 100px;
  transition: 0.2s ease;
  box-shadow: ${({ isOpen }) => isOpen && "0 0 20px 0px rgb(71 71 71 / 15%)"};
  transition-property: left box-shadow;
  ul {
    list-style: none;
    padding-left: 12px;
    li {
      display: block;
      margin-bottom: 10px;
      a {
        display: block;
        color: var(--text-color);
        text-decoration: none;
        padding: 5px 10px;
        &.active {
          color: var(--primary-fill);
        }
      }
    }
  }
`;

const Navbar = ({ isOpen, onNavLink }) => {
  return (
    <NavBarRoot isOpen={isOpen}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <NavLink to={link.to} onClick={onNavLink}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavBarRoot>
  );
};

export default Navbar;
