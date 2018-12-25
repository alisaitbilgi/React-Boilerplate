import React, { Component } from "react";
import "normalize.css";
import "../styles/main.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todoItem: "Create first redux flow..."};
  }

  handleClick(text) {
    return () => {
      this.setState({
        todoItem: this.state.todoItem + text
      })
    }
  }

  render() {
    var textTbAdded = " (Done)";

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
            <span>{this.state.todoItem}</span>
            <button
              onClick={this.handleClick(textTbAdded)}
              className="delete-icon"
            >
              {"X"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
