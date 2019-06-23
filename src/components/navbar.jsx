import React, { Component } from "react";

// Stateless Functional Components
const NavBar = ({ totalCounters }) => {
  console.log("Nav-bar - rendered");
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
