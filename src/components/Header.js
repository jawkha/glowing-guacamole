import React from "react";

const Header = () => {
  return (
    
      <nav className="navbar fixed-top bg-light flex-column flex-md-row">
        <a className="navbar-brand" href="#">
          <img
            src="src/images/logo/hyf-logo.svg"
            width="225"
            height="60"
            alt="organization logo"
          />
        </a>
          
            <a className="nav-item nav-link" href="#">
              ABOUT US
            </a>
          
            <a className="nav-item nav-link" href="#">
              APPLY NOW
            </a>
          
            <a className="nav-item nav-link" href="#">
              SUPPORT US
            </a>
          
            <a className="nav-item nav-link" href="#">
              CONTACT
            </a>
          
        
        <a className="nav-item nav-link" href="#" className="btn btn-outline-danger">
          DONATE
        </a>
      </nav>
    
  );
};

export default Header;
