import React from "react";
import { NavLink } from "react-router-dom";
import FaBars from "react-icons/lib/fa/bars";
import DonateModal from './DonateModal';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
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
        className="collapse navbar-collapse text-center justify-content-end"
        id="navbarTogglerDemo01"
      >
        <NavLink className="nav-item nav-link pr-5" to="/about">
          ABOUT US
        </NavLink>

        <NavLink className="nav-item nav-link pr-5" to="/apply">
          APPLY NOW
        </NavLink>

        <NavLink className="nav-item nav-link pr-5" to="/support">
          SUPPORT US
        </NavLink>

        <NavLink className="nav-item nav-link pr-5" to="/contact">
          CONTACT
        </NavLink>
        
      </div>
      <DonateModal className="nav-item nav-link" bootstrapProps={'btn btn-outline-danger d-none d-md-block'}/>
    </nav>
  );
};

export default Header;