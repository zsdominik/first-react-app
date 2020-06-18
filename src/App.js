import React, { Component } from "react";
import "./App.css";
import HelloPureComponent from "./comopnents/HelloPureComponent";
import HelloFunctionalComponent from "./comopnents/HelloFunctionalComponent";
import HelloReactComponent from "./comopnents/HelloReactComponent";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello world from JSX</h1>
        <HelloPureComponent />
        <HelloFunctionalComponent />
        <HelloReactComponent />
      </div>
    );

    // return React.createElement("h1", null, "Hello world");
  }
}

export default App;
