import BASEURL from "../baseUrl";

export const fetchUser = (nameObjFromState, history) => {
  return (dispatch) => {
    fetch(BASEURL + "/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nameObjFromState),
    })
      .then((resp) => resp.json())
      .then((userObj) => {
        if (userObj.err_message) {
          alert(userObj.err_message);
        } else {
          dispatch({ type: "FETCH_USER", payload: userObj });
          localStorage.setItem("loggedInUserID", userObj.id);
          history.push("/calendar");
        }
      });
  };
};

export const checkForUser = (userID, history) => {
  console.log("CHECKING FOR USER");
  return (dispatch) => {
    fetch(`${BASEURL}/users/${userID}`)
      .then((res) => {
        return res.json();
      })
      .then((userObj) => {
        history.push("/calendar");
        console.log(history);
        return dispatch({ type: "CHECK_LOGGED_USER", payload: userObj });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logoutUser = (history) => {
  history.push("/");
  localStorage.clear();
  return (dispatch) => {
    return dispatch({ type: "LOGOUT_USER" });
  };
};
