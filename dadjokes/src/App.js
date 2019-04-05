import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Jokes from "./Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
