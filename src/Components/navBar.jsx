import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="bigBox">
        <div className="navBar">
          <Link id="siteName" to="/">
            Bonecos da Ana
          </Link>
          <div className="navLinks">
            <a
              className="navLink"
              href="javascript: document.body.scrollIntoView(true);"
            >
              Topo
            </a>

            <a
              className="navLink"
              href="javascript: document.body.scrollIntoView(false);"
            >
              Contactos
            </a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i id="burger" className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
