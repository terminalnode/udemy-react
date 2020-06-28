import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  /*
  // Commented because it causes error, needs initial state.
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedState: ");
    return state;
  }
  */

  /*
  // Commented because this won't run, outdated lifecycle hook.
  componentWillReceiveProps(props) {
    console.log("[Persons.js] componentWillReceiveProps");
  }
  */

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");

    // Don't update if the arrays are the same.
    // Remember that when a person is updated a new array and person is created.
    // This will not check for mutations.
    return nextProps.persons !== this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot); // this is the snapshot we got from getSnapshotBeforeUpdate
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    return this.props.persons.map((person, id) =>
      <Person
        key={ person.id }
        click={ () => this.props.click(id) }
        changed={ (event) => this.props.changed(event, person.id) }
        name={ person.name }
        age={ person.age } />
    );
  }
}

export default Persons;
