import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
      case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  // state is kept only within the Provider component

  state = {
    // eslint-disable-next-line react/no-unused-state
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (

      // state is passed in value property within Context.Provider component

      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const { Consumer } = Context.Consumer;
