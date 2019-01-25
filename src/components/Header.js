import React from "react";
import PropTypes from "prop-types";

const Header = ({ appName }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
    <div className="container">
      <a href="/" className="navbar-brand">
        {appName}
      </a>
      <div>
        <ul className="navbar-nav mr-a">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  appName: "Contact handler"
};

Header.propTypes = {
  appName: PropTypes.string.isRequired
};

export default Header;
