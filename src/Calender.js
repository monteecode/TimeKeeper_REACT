import React from "react";
import Days from "./forms/Days";
import TimeTotal from "./TimeTotal";
import LogoutInput from "./LogoutInput";
import { connect } from "react-redux";

class Calendar extends React.Component {
  renderDays() {
    let days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<Days day={i} key={i} />);
    }
    return days;
  }

  render() {
    return (
      <>
        <LogoutInput />
        <section className="container">
          <TimeTotal />
          <div className="row gy-5">{this.renderDays()}</div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Calendar);
