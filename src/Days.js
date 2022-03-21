import React from "react";

export default class Days extends React.Component {
  render() {
    return (
      <div className="col-lg-2 days">
        <form>
          <h3>{this.props.day}</h3>

          <label class="form-label">Clock In</label>
          <input
            type="time"
            className="clockIn form-control"
            placeholder="Clock In"
          />
          <label>Clock Out</label>

          <input
            type="time"
            className="clockOut form-control"
            placeholder="Clock Out"
          />
        </form>
        <div className="btn-group-sm">
          <button className="btn btn-outline-success">ADD</button>
          <button className="btn btn-outline-warning">UPDATE</button>
          <button className="btn btn-outline-danger">DELETE</button>
        </div>
      </div>
    );
  }
}
