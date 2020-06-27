import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const newPerson = { ...this.state.persons[personIndex] };
    newPerson.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = newPerson;
    this.setState({ persons: newPersons });
  };

  deletePersonHandler = id => {
    const newPersons = [...this.state.persons];
    newPersons.splice(id, 1);
    this.setState({persons: newPersons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  render() {
    // Inline styling
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={ this.state.persons }
          click={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }
        />
      );
    }

    return (
      <div className={ classes.App }>
        <Cockpit
          appTitle={ this.props.appTitle }
          subTitle="This is really working!"
          click={ this.togglePersonsHandler }
          listLength={ this.state.persons.length }
          useHideStyling={ this.state.showPersons }
        />
        { persons }
      </div>
    );

    // This is what render actually does
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
