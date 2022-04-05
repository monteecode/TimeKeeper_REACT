import BASEURL from "../baseUrl";

export const updateTime = (
  userID,
  captured_date,
  updated_clock_in,
  updated_clock_out
) => {
  return (dispatch) => {
    fetch(`${BASEURL}/user_times/${captured_date}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: userID,
        clock_in: updated_clock_in,
        clock_out: updated_clock_out,
        date_of_times: captured_date,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((updated_timeObj) => {
        alert("Timestamp has been updated.");
        return dispatch({ type: "UPDATE_TIME", payload: updated_timeObj });
      });
  };
};
