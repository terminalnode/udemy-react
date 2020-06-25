import React from "react";

const userInput = props => {
  return (
    <div className="UserInput">
      <h2>User Input</h2>
      <input type="text" onChange={props.change} value={props.initValue} />
    </div>
  );
};

export default userInput;
