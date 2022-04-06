import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./actions/login";

const LogoutInput = (props) => {
  return (
    <div id="welcomeUser">
      {/* the && is like  aternary operator but just for two things. If the first is true, then do the second. Otherwise do nothing*/}
      <p>Welcome, {props.user && props.user.name}</p>
      <button onClick={() => props.logoutUser(props.history)}>logout</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { logoutUser })(
  withRouter(LogoutInput)
);
