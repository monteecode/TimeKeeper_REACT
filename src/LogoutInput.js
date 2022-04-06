import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./actions/login";

const LogoutInput = (props) => {
  return (
    <section id="welcomeUser" className="container">
      <p>
        Welcome,{" "}
        {props.user &&
          props.user.name[0].toUpperCase() + props.user.name.slice(1) + "!"}
      </p>
      {/* If user exists then display user name */}
      <button
        className="btn btn-sm btn-danger"
        onClick={() => props.logoutUser(props.history)}
      >
        logout
      </button>
    </section>
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
