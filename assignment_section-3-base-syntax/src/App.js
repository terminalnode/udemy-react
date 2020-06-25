import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [
      "Svante", "Ture"
    ]
  };

  changeNamesHandler = event => {
    this.setState({
      users: [
        event.target.value, "Ture"
      ]
    });
  };

  render() {
    const style = {
      color: "#338"
    };

    return (
      <div className="App">
        <h1 style={style}>React basics with inline styling!</h1>
        <UserOutput name={this.state.users[0]} />
        <UserOutput name={this.state.users[1]} />
        <UserInput change={this.changeNamesHandler} initValue={this.state.users[0]} />

        <h2>Instructions:</h2>
        <ol>
          <li>[x] Create TWO new components: UserInput and UserOutput</li>
          <li>[x] UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>[x] Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>[x] Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>[x] Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>[x] Add a method to manipulate the state (=> an event-handler method)</li>
          <li>[x] Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>[x] Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>[x] Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>[x] Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  };
};

export default App;
