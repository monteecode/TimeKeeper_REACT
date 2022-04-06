import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { checkForUser } from "./actions/login";
import { connect } from "react-redux";
import LoginForm from "./forms/LoginForm";
import "./bootstrap/css/bootstrap-grid.css";
import "./bootstrap/css/bootstrap.min.css";
import "./App.css";
import Calendar from "./Calender";

class App extends Component {
  componentDidMount() {
    let userID = localStorage.getItem("loggedInUserID");

    if (userID) {
      this.props.checkForUser(userID, this.props.history);
    } else {
      return this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/calendar" component={Calendar} />
      </div>
    );
  }
}

export default connect(null, { checkForUser })(withRouter(App));
