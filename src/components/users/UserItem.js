import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mzkhan25",
    avatar_url: "https://avatars0.githubusercontent.com/u/14289218?s=460&v=4",
    html_url: "https://github.com/mzkhan25"
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-dark brn-sm my-1">
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
