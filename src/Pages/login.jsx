import React, { Component } from "react";
import LoginForm from "../Components/loginForm";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="bigBox">
        <div className="smallBoxPage">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
