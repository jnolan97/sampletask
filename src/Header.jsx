import React from "react";
import logo from './logo.svg';
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/task">
              Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
