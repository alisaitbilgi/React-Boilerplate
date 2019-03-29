import React, { Component } from "react";
import "../styles/main.css";

class TodoForm extends Component {
  render() {
    const { todoText, dispatch } = this.props;

    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input-field"
          value={todoText}
          onChange={e => dispatch({ type: "SET_TEXT", data: e.target.value })}
        />
        <button
          onClick={() => dispatch({ type: "SET_TODO_ITEM", data: todoText})}
          className="add-task-btn"
        >
          {"Add Task"}
        </button>
      </form>
    );
  }
}

export default TodoForm;
