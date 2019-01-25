import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onClickDropDown = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onClickDelete = () => {
    this.props.deleteClickHandler();
  }

  render() {
    console.log(this.props);
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={this.onClickDropDown}
            onKeyPress={this.onClickDropDown}
            role="button"
            tabIndex="0"
            className="fas fa-sort-down"
            style={{ cursor: "pointer", marginLeft: "5px"}}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onClickDelete}
            onKeyPress={this.onClickDelete}
            role="button"
            tabIndex="0"
          />
        </h4>
        {showContactInfo ?
          (
            <ul className="list-group">
              <li className="list-group-item">{email}</li>
              <li className="list-group-item">{phone}</li>
            </ul>) : null
        }
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
