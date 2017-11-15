import React from "react";
import { NavLink } from "react-router-dom";
import FaBars from "react-icons/lib/fa/bars";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light flex-md-row">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <FaBars />
        </span>
      </button>
      <NavLink className="navbar-brand" exact to="/">
        <img
          src="src/images/logo/hyf-logo.svg"
          width="225"
          height="60"
          alt="organization logo"
        />
      </NavLink>
      <div
        className="collapse navbar-collapse text-center"
        id="navbarTogglerDemo01"
      >
        <NavLink className="nav-item nav-link" to="/about">
          ABOUT US
        </NavLink>

        <NavLink className="nav-item nav-link" to="/apply">
          APPLY NOW
        </NavLink>

        <NavLink className="nav-item nav-link" to="/support">
          SUPPORT US
        </NavLink>

        <NavLink className="nav-item nav-link" to="/contact">
          CONTACT
        </NavLink>
      </div>
      <NavLink
        className="nav-item nav-link"
        to="/donate"
        className="btn btn-outline-danger d-none d-md-block"
      >
        DONATE
      </NavLink>
    </nav>
  );
};

export default Header;
