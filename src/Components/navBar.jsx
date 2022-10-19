import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <p>imagem</p>
        <div className="siteName">
          <Link id="siteName" to="/">
            Bonecos da Ana link Home
          </Link>
        </div>
        <button className="btn btn-primary">Login</button>
      </div>
    );
  }
}

export default NavBar;
