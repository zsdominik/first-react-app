import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld/HelloWorld";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello world</h1>
        <HelloWorld />
      </div>
    );

    // return React.createElement("h1", null, "Hello world");
  }
}

export default App;
