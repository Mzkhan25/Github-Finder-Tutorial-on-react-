import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "John Doe";
    const showName = true;
    const loading = false;
    return (
      <div className="App">
        <h1>Hello from the other side, you will enjoy learning it.</h1>
        {loading ? <h4>Loading...</h4> : <h1>Yo {showName ? name : null}</h1>}
      </div>
      // <Fragment>
      //   <h1>Hello, i'm learning react</h1>
      //   <h2>Good for you :P </h2>
      // </Fragment>
    );
  }
}

export default App;
