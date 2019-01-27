import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ appName }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
    <div className="container">
      <a href="/contactshandler" className="navbar-brand">
        {appName}
      </a>
      <div>
        <ul className="navbar-nav mr-a">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"/> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus"/> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question"/> About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired
};

export default Header;
