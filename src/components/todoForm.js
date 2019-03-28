import React, { Component } from "react";
import "../styles/main.css";

class TodoForm extends Component {
  render() {
    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input-field"
          value={this.props.todoText}
          onChange={e => this.props.dispatch({ type: "SET_TEXT", data: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.dispatch({
              type: "SET_TODO_ITEM",
              data: this.props.todoText
            });
          }}
          className="add-task-btn"
        >
          {"Add Task"}
        </button>
      </form>
    );
  }
}

export default TodoForm;
