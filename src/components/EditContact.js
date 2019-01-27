import React from "react";
import axios from "axios";
import { Consumer } from "../context";
import TextInputGroup from "./TextInputGroup";

class EditContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
     });
  }

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = async (dispatch, event) => {
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

    const updateContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    // redirect to wherever you want take the user on submit
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit contact</div>
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
                    value="Update Contact"
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

export default EditContact;
