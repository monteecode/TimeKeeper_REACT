import React from "react";
import { AddButton } from "../buttons/AddButton";
import { UpdateButton } from "../buttons/UpdateButton";
import { DeleteButton } from "../buttons/DeleteButton";

export default class Days extends React.Component {
  state = {
    clockIn: "",
    clockOut: "",
    capturedDate: this.props.day,
    date_hasTimes: false,
    date_removeTimes: false,
  };

  componentDidMount() {
    this.fillInTimes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.fillInTimes();
    }

    if (prevState.date_hasTimes !== this.state.date_hasTimes) {
      this.setState((prevState) => {
        return {
          ...prevState,
          date_hasTimes: !prevState.date_of_times,
        };
      });
    }
  }

  findDay = () => {
    if (this.props.user && this.props.user.user_times) {
      let foundDate = this.props.user.user_times.find(
        (ut) => parseInt(ut.date_of_times) === this.state.capturedDate
      );
      if (
        foundDate &&
        foundDate.clock_in.slice(11, 16) !== this.state.clockIn
      ) {
        return foundDate;
      }
    }
  };

  fillInTimes = () => {
    let foundDate = this.findDay();
    if (foundDate) {
      this.setState((prevState) => {
        return {
          ...prevState,
          clockIn: foundDate.clock_in.slice(11, 16),
          clockOut: foundDate.clock_out.slice(11, 16),
          date_hasTimes: !prevState.date_hasTimes,
        };
      });
    }
  };

  handleOnChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => console.log(this.state)
    );
  }

  handleOnAdd(event) {
    event.preventDefault();
    this.props.addTime(
      this.props.user.id,
      this.state.clockIn,
      this.state.clockOut,
      this.state.capturedDate
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        date_hasTimes: true,
      };
    });
  }

  handleOnDelete(event) {
    event.preventDefault();
    this.props.deleteTime(
      this.props.user.id,
      this.state.capturedDate,
      this.state.clockIn,
      this.state.clockOut
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        clockIn: "",
        clockOut: "",
        date_removeTimes: true,
      };
    });
  }

  handleOnUpdate(event) {
    event.preventDefault();
    this.props.updateTime(
      this.props.user.id,
      this.state.capturedDate,
      this.state.clockIn,
      this.state.clockOut
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        clockIn: "",
        clockOut: "",
        date_removeTimes: false,
      };
    });
  }

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
          <AddButton className="btn btn-outline-success" />
          <UpdateButton className="btn btn-outline-warning" />
          <DeleteButton className="btn btn-outline-danger" />
          <button>ADD</button>
          <button>UPDATE</button>
          <button>DELETE</button>
        </div>
      </div>
    );
  }
}
