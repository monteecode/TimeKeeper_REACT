let initialState = {
  user: null,
};

export default function manageTime(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TIME":
      console.log(state);
      return { user: action.payload };

    case "UPDATE_TIME":
      return { user: action.payload };

    case "DELETE_TIME":
      return { user: action.payload };

    case "CHECK_LOGGED_USER":
      return { user: action.payload };

    case "FETCH_USER":
      return { user: action.payload };

    case "LOGOUT_USER":
      return initialState;

    default:
      return state;
  }
}
