import React, { Component } from "react";
import "normalize.css";
import "../styles/main.css";

class App extends Component {
  constructor(props){
    super(props);
  }

  // ...methods are here...

  render() {
    // variables stays here...

    return (
      <div className="app">
        <form className="form-container">
          <input className="input-field" placeholder={"Task Description"}/>
          <button className="add-task-btn">
            {"Add Task"}
          </button>
        </form>
        <div className="list-container">
          <div className="each-todo">
            <span>{"Create first redux flow..."}</span>
            <button className="delete-icon">{"X"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
