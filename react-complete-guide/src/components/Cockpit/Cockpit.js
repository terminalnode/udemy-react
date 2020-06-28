import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  // useEffect is basically componentDidMount and componentDidUpdate in one
  // it triggers on every update cycle
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    // Emulated http request
    setTimeout(() => {
      console.log("[Cockpit.js] Ouf, that was some heavy lifting.");
    }, 1000)

    return () => {
      // This will run before the component is unmounted, basically same
      // as componentWillUnmount. In this app that is... never.
      console.log("[Cockpit.js] cleanup work in useEffect");
    };

  // Passing an array with for example props.persons will have this
  // method only run when props.persons has been updated.
  // }, [ props.persons ]);

  // But hey, look at this. Now we have nothing in the array. So what
  // does react do? It runs on componentDidMount, then updates whenever
  // one of the objects in the array change. Since the array is empty... :)
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect with no limitations");
  });

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

//export default cockpit;

// Using React.memo makes react check if a component does need to update.
// If it doesn't need to update, i.e. if no part of it's state is changed, it won't.
export default React.memo(cockpit);
