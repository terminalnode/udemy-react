import React, { Component } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

class App extends Component {
  state = {
    text: "plswrite"
  }

  editTextHandler = event => {
    this.setState({ text: event.target.value })
  }

  deleteCharHandler = index => {
    const stringArray = this.state.text.split("");
    stringArray.splice(index, 1);
    const newString = stringArray.join("")
    this.setState({ text: newString })
  }

  render() {
    const chars = this.state.text.split("").map((char, index) => {
      return <Char key={ index } character={ char } click={ () => this.deleteCharHandler(index) } />
    });

    return (
      <div className="App">
        <ol>
          <li>[x] Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>[x] Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>[x] Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>[x] Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>[x] Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>[x] When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={ this.editTextHandler } value={ this.state.text } />
        <Validation textLength={ this.state.text.length } />
        { chars }
      </div>
    );
  }
}

export default App;
