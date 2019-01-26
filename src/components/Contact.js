import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends React.Component {
  state = {
    showContactInfo: false
  };

  onClickDropDown = () => {
    this.setState(prevState => ({ showContactInfo: !prevState.showContactInfo }));
  };

  onClickDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
