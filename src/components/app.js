import React, { Component } from "react";
import "../styles/main.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: "Hello TEB",
      todoItems: ["Do workshop", "Make presentation", "Say hello"]
    };
  }

  render() {
    return (
      <div className="app">
        <form className="form-container" onSubmit={(e) => e.preventDefault()}>
          <input
            className="input-field"
            value={this.state.todoText}
            onChange={() => {/* do nothing for now */}}
          />
          <button className="add-task-btn">{"Add Task"}</button>
        </form>
        <div className="list-container">
          {
            this.state.todoItems.map((eachTodo, idx) => (
              <div className="each-todo" key={idx}>
                <span>{eachTodo}</span>
                <button className="delete-icon">{"X"}</button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
