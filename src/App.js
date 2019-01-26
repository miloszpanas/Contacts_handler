import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import AddContact from "./components/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header appName="Contact handler"/>
          <div className="container">
            <AddContact/>
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
