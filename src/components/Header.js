import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    
      <nav className="navbar fixed-top bg-light flex-column flex-md-row">
        <NavLink className="navbar-brand" exact to="/">
          <img
            src="src/images/logo/hyf-logo.svg"
            width="225"
            height="60"
            alt="organization logo"
          />
        </NavLink>
          
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
          
        
        <NavLink className="nav-item nav-link" to="/donate" className="btn btn-outline-danger d-none d-md-block">
          DONATE
        </NavLink>
      </nav>
    
  );
};

export default Header;
