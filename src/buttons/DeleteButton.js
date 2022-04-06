import React from "react";

const DeleteButton = (props) => (
  <button className="btn btn-outline-danger" onClick={props.deleteTimes}>
    DELETE
  </button>
);

export default DeleteButton;
