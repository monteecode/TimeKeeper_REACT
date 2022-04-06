import React from "react";
import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
import { connect } from "react-redux";
import { addTime } from "../actions/AddTimes";
import { deleteTime } from "../actions/DeleteTimes";
import { updateTime } from "../actions/UpdateTimes";

class Days extends React.Component {
  state = {
    clockIn: "",
    clockOut: "",
    capturedDate: this.props.day,
    date_hasTimes: false,
    // date_removeTimes: false,
  };

  componentDidMount() {
    this.fillInTimes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.fillInTimes();
    }
    // console.log("PREVSTATE DATE HAS TIMES--->", prevState.date_hasTimes);
    // console.log("CURRENT STATE DATE HAS TIMES--->", this.state.date_hasTimes);
    // if (prevState.date_hasTimes !== this.state.date_hasTimes) {
    //   this.setState((prevState) => {
    //     return {
    //       ...prevState,
    //       date_hasTimes: !prevState.date_of_times,
    //     };
    //   });
    // }
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
        date_hasTimes: false,
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
    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     // date_removeTimes: false,
    //   };
    // });
  }

  render() {
    return (
      <div className="col-lg-2 days">
        <form>
          <h3>{this.props.day}</h3>

          <label class="form-label">Clock In</label>
          <input
            type="time"
            name="clockIn"
            value={this.state.clockIn}
            className="clockIn form-control"
            placeholder="Clock In"
            onChange={(event) => this.handleOnChange(event)}
          />
          <label>Clock Out</label>

          <input
            type="time"
            name="clockOut"
            value={this.state.clockOut}
            className="clockOut form-control"
            placeholder="Clock Out"
            onChange={(event) => this.handleOnChange(event)}
          />

          <div className="btn-group-sm">
            {
              //console.log(this.props.user.user_times)
              this.state.date_hasTimes ? (
                <>
                  <UpdateButton
                    className="btn btn-outline-warning"
                    updateTimes={(event) => this.handleOnUpdate(event)}
                  />
                  <DeleteButton
                    className="btn btn-outline-danger"
                    deleteTimes={(event) => this.handleOnDelete(event)}
                  />
                </>
              ) : (
                <AddButton
                  className="btn btn-outline-success"
                  addTimes={(event) => this.handleOnAdd(event)}
                />
              )
            }
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { addTime, updateTime, deleteTime })(
  Days
);
