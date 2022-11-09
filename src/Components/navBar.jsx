import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class NavBar extends Component {
  render() {
    let mostrarLinks = () => {
      let x = document.getElementById("linksBox");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    };

    return (
      <div className="bigBoxNav">
        <div className="navBar">
          <Link id="siteName" to="/">
            Bonecos da Ana
          </Link>

          <a className="icon" onClick={mostrarLinks}>
            <i id="burger" className="fa fa-bars"></i>
          </a>
        </div>
        <div onClick={mostrarLinks} id="linksBox">
          <Link id="navLink" to="/">
            Home
          </Link>
          <a
            id="navLink"
            href="javascript: document.body.scrollIntoView(true);"
          >
            Topo
          </a>
          <a
            id="navLink"
            href="javascript: document.body.scrollIntoView(false);"
          >
            Contactos
          </a>
          <Link id="navLink" to="/marvel">
            Marvel
          </Link>
          <Link id="navLink" to="/DC">
            DC
          </Link>
          <Link id="navLink" to="/disney">
            Disney
          </Link>
          <Link id="navLink" to="/">
            Harry Potter
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
