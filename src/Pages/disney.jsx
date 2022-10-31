import React, { Component } from "react";
import { ReactComponent as Marvelimg } from "../images/Marvel.svg";

class Disney extends Component {
  state = {};
  render() {
    return (
      <div className="smallBoxPage">
        <Marvelimg className="pageImg" />
        <p>mais imagens</p>
      </div>
    );
  }
}

export default Disney;
