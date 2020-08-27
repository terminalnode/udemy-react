import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import functionalWithClass from "../hoc/functionalWithClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log("[App.js] render");

    // Inline styling
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={ this.state.persons }
          click={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }
          isAuthenticated={ this.state.authenticated }
        />
      );
    }

    return (
      <Aux>
        <AuthContext.Provider
          value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
          }} >
          <Cockpit
            appTitle={ this.props.appTitle }
            subTitle="This is really working!"
            click={ this.togglePersonsHandler }
            listLength={ this.state.persons.length }
            useHideStyling={ this.state.showPersons }
            loginButtonText="Sign in"
            loginFunction={ this.loginHandler }
          />
          { persons }
        </AuthContext.Provider>
      </Aux>
    );

    // This is what render actually does
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does this work now?"));
  }
}

export default functionalWithClass(App, classes.App);
