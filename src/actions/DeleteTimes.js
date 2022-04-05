import BASEURL from "../baseUrl";

export const deleteTime = (
  userID,
  captured_date,
  deleted_clock_in,
  deleted_clock_out
) => {
  return (dispatch) => {
    fetch(`${BASEURL}/user_times/${captured_date}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: userID,
        clock_in: deleted_clock_in,
        clock_out: deleted_clock_out,
        date_of_times: captured_date,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((userObj) => {
        alert("Timestamp has been deleted.");
        return dispatch({ type: "DELETE_TIME", payload: userObj });
      });
  };
};
