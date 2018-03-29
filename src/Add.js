import React, { Component } from "react";

const Add = props => {
  return (
    <li>
      {props.todo}
      <button onClick={props.delete}>Remove</button>
    </li>
  );
};

export default Add;
