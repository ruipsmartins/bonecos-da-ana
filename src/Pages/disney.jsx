import React, { Component } from "react";
import { ReactComponent as Disneyimg } from "../images/Disney_logo.svg";

class Disney extends Component {
  state = {};
  render() {
    return (
      <div className="smallBoxPage">
        <Disneyimg className="pageImg" />
        <div>
          <p>mais imagens</p>
        </div>
      </div>
    );
  }
}

export default Disney;
