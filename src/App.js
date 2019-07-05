import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
class App extends Component {
  render() {
    const name = "John Doe";

    return (
      <div className="App">
        <Navbar icon="fab fa-github" />
      </div>
      // <Fragment>
      //   <h1>Hello, i'm learning react</h1>
      //   <h2>Good for you :P </h2>
      // </Fragment>
    );
  }
}

export default App;
