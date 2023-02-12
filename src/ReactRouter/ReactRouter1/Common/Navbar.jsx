import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" nav navbar-nav mr-auto">
            <li className="active">
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
            <li>
              <Link to="/User/Amit"> Amit</Link>
            </li>
            <li>
              <Link to="/USer/Avik"> Avik</Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
