import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <div className="container header_nav_inner flex space-bet align-cen">
          <div className="header_logo h-3">
            Realtor's Name <img src="" alt="" />
          </div>
          <ul className="header_list flex space-bet">
            <li className="header_list_link">
              <Link to="/">Home</Link>
            </li>
            <li className="header_list_link">
              {" "}
              <Link to="/findHome">Find a Home</Link>
            </li>
            <li className="header_list_link">
              {" "}
              <Link to="/contact">Home Valuation</Link>
            </li>
            <li className="header_list_link">
              {" "}
              <Link to="/about">About Me</Link>
            </li>
            <li className="header_list_link cta-link ">
              <Link className="border-round" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
