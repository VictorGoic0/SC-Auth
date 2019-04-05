import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class NavBar extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.checkSignIn();
    }
  }
  render() {
    return (
      <nav className="navigation">
        <NavLink exact to="/login" activeClassName="active-nav">
          Login
        </NavLink>
        <NavLink to="/jokes" activeClassName="active-nav">
          Dad Jokes
        </NavLink>
        {this.props.loggedIn ? (
          <NavLink
            to="/login"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Log Out
          </NavLink>
        ) : null}
      </nav>
    );
  }
}

export default withRouter(NavBar);
