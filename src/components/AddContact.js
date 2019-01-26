import React from "react";
import uuid from "uuid";
import { Consumer } from "../context";
import TextInputGroup from "./TextInputGroup";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    // validate empty form fields
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone number is required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    value={name}
                    label="Name"
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter name"
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    value={email}
                    label="Email"
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    value={phone}
                    label="Phone"
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter phone number"
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
