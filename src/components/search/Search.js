import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Search extends Component {
  state = {
    text: ""
  };
  onsubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: " " });
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
