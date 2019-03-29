import React, { Component } from "react";
import "../styles/main.css";

class TodoForm extends Component {
  render() {
    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input-field"
        />
        <button className="add-task-btn">
          {"Add Task"}
        </button>
      </form>
    );
  }
}

export default TodoForm;
