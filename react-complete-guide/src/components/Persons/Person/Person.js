import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux"
import functionalWithClass from "../../../hoc/functionalWithClass";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] render");

    return (
      <Aux>
        <p onClick={ this.props.click }>
          I'm { this.props.name }, and I'm { this.props.age } years old!
        </p>
        <p>{this.props.children}</p>

        <input
          //ref={ (inputEl) => { this.inputElement = inputEl } }
          ref={ this.inputElementRef }
          type="text"
          onChange={ this.props.changed }
          value={ this.props.name }
        />
      </Aux>
    );
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default functionalWithClass(Person, classes.Person);
