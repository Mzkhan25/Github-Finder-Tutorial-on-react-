import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/search/Search";
import Alert from "./components/Alert/Alert";
import About from "./components/About/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users] = useState([]);
  const [] = useState([]);
  const [loading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" render={About} />
              <Route exact path="/user/:login" component={User} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
