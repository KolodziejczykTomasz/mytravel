import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">        
          <img
            src="https://bulma.io/images/bulma-logo.png"
           
            alt="Brand logo"
          />

        <Link
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbar" className="navbar-menu is-active">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/castles" className="navbar-link">
            Zamki
          </NavLink>
          <NavLink to="/forgotens" className="navbar-link">
            Zapomniane
          </NavLink>
        </div>       
      </div>
    </nav>
  );
};

export default Navigation;
