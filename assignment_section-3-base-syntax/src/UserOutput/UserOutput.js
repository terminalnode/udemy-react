import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <h2>User Output</h2>
      <p>Username: {props.name}</p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default userOutput;
