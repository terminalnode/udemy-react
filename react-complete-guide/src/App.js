import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, id) => {
              return <Person
                key={ person.id }
                click={ () => this.deletePersonHandler(id) }
                changed={ (event) => this.nameChangedHandler(event, person.id) }
                name={ person.name }
                age={ person.age } />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button
          style={ style }
          onClick={ this.togglePersonsHandler }>Toggle persons</button>
        { persons }
      </div>
    );
    // This is what render actually does
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
  }
}

export default App;
