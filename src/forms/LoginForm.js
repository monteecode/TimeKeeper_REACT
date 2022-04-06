import React, { Component } from "react";
import LoginButton from "../buttons/LoginButton";
// import Header from "./Header";
// import DemoMessage from "./DemoMessage";
import { fetchUser } from "../actions/login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  state = {
    name: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchUser({ name: this.state.name }, this.props.history);
  };

  render() {
    return (
      <div>
        {/* <Header /> */}
        <form onSubmit={this.handleSubmit}>
          <div id="sign_up_in">
            <div id="sign_up">
              <input
                type="text"
                name="name"
                id="sign_in_user"
                placeholder="Log In"
                onChange={this.handleOnChange}
              />
              <LoginButton id="submit_user" />
              {/* <DemoMessage /> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { fetchUser })(withRouter(LoginForm));
