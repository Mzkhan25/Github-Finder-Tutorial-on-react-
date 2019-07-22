import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import User from "./components/users/User";
import Alert from "./components/Alert/Alert";
import About from "./components/About/about";
import Home from "./components/Home/Home";
import NotFound from "./components/Generic/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon="fab fa-github" />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
                )} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
