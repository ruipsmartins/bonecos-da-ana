import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="bigBox">
        <div className="trabalhosImg">
          <h1>Home</h1>
          <Link to="/trabalhos">Trabalhos</Link>
        </div>
      </div>
    );
  }
}

export default Home;
