import React from "react";
import Contact from "./Contact";


class Contacts extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Micheal Moore",
        email: "michaelmoore@gmail.com",
        phone: "447-854-698"
      },
      {
        id: 2,
        name: "Michelle Smith",
        email: "michelle@gmail.com",
        phone: "558-954-235"
      },
      {
        id: 3,
        name: "Marianne Waltz",
        email: "marianne@gmail.com",
        phone: "668-974-245"
      }
    ]
  };

  deleteContact= (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
