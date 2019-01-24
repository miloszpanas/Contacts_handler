import React from "react";
import PropTypes from "prop-types";

const Header = ({ appName }) => {
  return <div>{appName}</div>
};

Header.defaultProps = {
  appName: "Contact handler"
};

Header.propTypes = {
  appName: PropTypes.string.isRequired
}

export default Header;