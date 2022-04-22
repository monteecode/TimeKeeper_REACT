import React from "react";
import { connect } from "react-redux";

const TimeTotal = (props) => {
  const timeDifferenceInADay = (start, end) => {
    start = start.split(":");
    end = end.split(":");
    console.log("Start--->", start);
    console.log("END--->", end);
    //end[0] = end[0] === "00" ? "24" : end[0];
    // if (end[0] < start[0]) {
    //   alert("Clock In time must be before the clock out time.");
    //   return 0;
    // }
    let startTime = new Date(0, 0, 0, start[0], start[1], 0); //don't need
    let endTime = new Date(0, 0, 0, end[0], end[1], 0); //don't need
    console.log("MILLISECONDS FOR STARTIME", startTime.getTime());
    console.log("MILLISECONDS FOR ENDTIME", endTime.getTime());
    console.log(
      "IS Start less than end",
      Math.abs(startTime.getTime()) < Math.abs(endTime.getTime())
    );
    return Math.abs(startTime.getTime() - endTime.getTime()); //milliseconds
  };

  const calcTime = (data) => {
    console.log(data);
    let totalMonthTime = data.user_times.reduce((total, stamp) => {
      return (
        total +
        timeDifferenceInADay(
          stamp.clock_in.slice(11, 16),
          stamp.clock_out.slice(11, 16)
        )
      );
    }, 0);
    return convertTime(totalMonthTime);
  };

  const convertTime = (timeSeconds) => {
    let minutes,
      hours = 0;
    //seconds = (timeSeconds / 1000) % 60;

    minutes = (timeSeconds / (1000 * 60)) % 60;
    hours = Math.floor(timeSeconds / 3600 / 1000);
    //hours = Math.floor((timeSeconds / (1000 * 60 * 60)) % 24);
    return `${hours} HOURS, ${minutes} MINUTES`;
  };
  return (
    <header>
      <h3>
        Calculate time in a month total:{" "}
        <span id="currentTime">{props.user && calcTime(props.user)}</span>
      </h3>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(TimeTotal);
