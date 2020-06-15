import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld/HelloWorld";

// https://medium.com/better-programming/when-to-use-react-purecomponent-723f85738be1
// class App extends PureComponent {
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello world from jsx</h1>
        <HelloWorld />
      </div>
    );

    // return React.createElement("h1", null, "Hello world");
  }
}

export default App;
