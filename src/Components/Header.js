import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.scss";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header>
      <nav>
        <h1>
          <Link to="/">NICK DEOM</Link>
        </h1>
        <ul id="nav-list">
          <li>
            <Link
              className={`nav-item ${path === "/about" ? "active" : ""}`}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={`nav-item ${path === "/work" ? "active" : ""}`}
              to="/work"
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              className={`nav-item ${path === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
