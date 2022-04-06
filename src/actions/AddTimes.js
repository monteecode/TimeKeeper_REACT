import BASEURL from "../baseUrl";

export const addTime = (userID, clock_in, clock_out, captured_date) => {
  return (dispatch) => {
    fetch(`${BASEURL}/user_times`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        clock_in: clock_in,
        clock_out: clock_out,
        date_of_times: captured_date,
        user_id: userID,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((userObj) => {
        console.log(userObj);
        if (userObj.err_message) {
          alert(userObj.err_message);
        } else {
          alert("Timestamp is now added.");
          return dispatch({ type: "ADD_TIME", payload: userObj });
        }
      });
  };
};
