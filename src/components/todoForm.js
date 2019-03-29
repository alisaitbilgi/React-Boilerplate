import React, { PureComponent } from "react";
import "../styles/main.css";

class TodoForm extends PureComponent {

  handleChange(dispatch) {
    return e => {
      dispatch({ type: "SET_TEXT", data: e.target.value })
    }
  }

  handleClick(dispatch, todoText) {
    return () => {
      dispatch({ type: "SET_TODO_ITEM", data: todoText})
    }
  }

  render() {
    const { todoText, dispatch } = this.props;

    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input-field"
          value={todoText}
          onChange={this.handleChange(dispatch)}
        />
        <button
          onClick={this.handleClick(dispatch, todoText)}
          className="add-task-btn"
        >
          {"Add Task"}
        </button>
      </form>
    );
  }
}

export default TodoForm;
