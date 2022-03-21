import React from "react";

export default class Days extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h3>{this.props.day}</h3>
          <label>Clock In</label>
          <input type="time" className="clockIn" placeholder="Clock In" />
          <label>Clock Out</label>
          <input type="time" className="clockOut" placeholder="Clock Out" />
        </form>
        <div className="btnActions">
          <button>ADD</button>
          <button>UPDATE</button>
          <button>DELETE</button>
        </div>
      </div>
    );
  }
}
