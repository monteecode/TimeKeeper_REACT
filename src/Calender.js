import React from "react";
import Days from "./Days";

export default class Calendar extends React.Component {
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
        <section className="container">
          <div className="calendar">{this.renderDays()}</div>
        </section>
      </>
    );
  }
}
