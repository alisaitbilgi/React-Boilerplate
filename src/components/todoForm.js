import React, { Component } from "react";

class TodoForm extends Component {
  handleChange(dispatch) {
    return e => {
      dispatch({
        type: "SET_TEXT",
        data: e.target.value
      })
    }
  }

  handleClick(dispatch, todoText) {
    return () => {
      dispatch({
        type: "SET_TODO_ITEM",
        data: todoText
      })
    }
  }

  render() {
    const { todoText, dispatch } = this.props;

    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={this.handleChange(dispatch)}
          value={todoText}
          className="input-field"
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
