import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [ ];
  if (props.listLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.listLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  let buttonClass = "";
  if (props.useHideStyling) {
    buttonClass = classes.Red;
  }

  return (
    <div className={ classes.Cockpit }>
      <h1>{ props.appTitle ? props.appTitle : "This is a default title" }</h1>
      <p className={ assignedClasses.join(" ") }>
        { props.subTitle ? props.subTitle : "This is the subtitle" }
      </p>
      <button
        className={ buttonClass }
        onClick={ props.click ? props.click : () => alert("Button was clicked! That tickles!") }>
        { props.buttonText ? props.buttonText : "Toggle" }
      </button>
    </div>
  );
};

export default cockpit;
