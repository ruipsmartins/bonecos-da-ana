import React, { Component } from "react";
import { ReactComponent as Dcimg } from "../images/DC_logo.svg";

class DC extends Component {
  state = {};
  render() {
    return (
      <div className="smallBoxPage">
        <Dcimg className="pageImg" />
        <p>mais imagens</p>
      </div>
    );
  }
}

export default DC;
