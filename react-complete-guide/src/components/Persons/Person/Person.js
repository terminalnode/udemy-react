import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux"
import functionalWithClass from "../../../hoc/functionalWithClass";

class Person extends Component {
  render() {
    console.log("[Person.js] render");

    return (
      <Aux>
        <p onClick={ this.props.click }>
          I'm { this.props.name }, and I'm { this.props.age } years old!
        </p>
        <p>{this.props.children}</p>

        <input
          type="text"
          onChange={ this.props.changed }
          value={ this.props.name }
        />
      </Aux>
    );
  };
}

export default functionalWithClass(Person, classes.Person);
