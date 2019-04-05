import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Jokes from "./Jokes";

class App extends Component {
  state = {
    loggedIn: false
  };
  checkSignIn = () => {
    if (localStorage.getItem("token")) {
      this.setState({ loggedIn: true });
    } else if (this.state.loggedIn && !localStorage.getItem("token")) {
      this.setState({ loggedIn: false });
    }
  };
  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.state.loggedIn} checkSignIn={this.checkSignIn} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
