import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
