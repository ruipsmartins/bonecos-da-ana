import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/trabalhos">Imagens dos Trabalhos</Link>
      </div>
    );
  }
}

export default Home;
