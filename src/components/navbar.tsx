import React from "react";
import "bootstrap";
import "../styles/_navbar.scss";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">
          <img
            src="favicon.ico"
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt="groovify-logo"
          />
          Groovify
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
