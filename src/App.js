import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName="Contact handler"/>
        <div className="container">
          <Contact
            name="marian"
            email="marian@gmail.com"
            phone="547-874-657"
          />

          <Contact
            name="marian"
            email="marian@gmail.com"
            phone="547-874-657"
          />
        </div>
      </div>
    );
  }
}

export default App;
