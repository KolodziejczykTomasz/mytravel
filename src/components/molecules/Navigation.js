import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWarpper = styled.nav``;

const NavBrand = styled.div`
  height: 12px;
  width: 100px;
  padding: 5px 5px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const NavBrandImg = styled.img`
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavBar = styled.div`
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`;

const NavBarStart = styled.div``;

const Navigation = () => {
  return (
    <NavWarpper
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main
      navigation"
    >
      <NavBrand className="navbar-brand">
        <NavBrandImg src="https://bulma.io/images/bulma-logo.png" alt="Brand logo" />
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
      </NavBrand>

      <NavBar id="navbar" className="navbar-menu is-active">
        <NavBarStart className="navbar-start">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/castles" className="navbar-link">
            Zamki
          </NavLink>
          <NavLink to="/forgotens" className="navbar-link">
            Zapomniane
          </NavLink>
        </NavBarStart>
      </NavBar>
    </NavWarpper>
  );
};

export default Navigation;
