import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>email: marian@gmail.com</li>
          <li>phone no.: 548789548</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
}

export default Contact;
