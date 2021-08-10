import React, { useState } from "react";
import { Link } from "react-router-dom";
import Girl from "../pexels-andrea-piacquadio-733872.jpg";
import Hamburger from "@ktno/react-hamburgers";
const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <nav className="header_nav">
        <div className="container header_nav_inner flex space-bet align-cen">
          <Link to="/" className="header_logo h-3">
            <img src={Girl} alt="Realtor Name" /> Suzanne Diloski
          </Link>
          <ul
            className={`header_list flex space-bet ${
              active ? "show" : "t-hide"
            }`}
          >
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
          <Hamburger
            active={active}
            type="collapse"
            onClick={() => {
              setActive((currentState) => !currentState);
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
