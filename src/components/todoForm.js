import React, { Component } from "react";
import { connect } from "react-redux";

class TodoForm extends Component {
  render() {
    const { todoText, handleChange, handleClick } = this.props;

    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleChange()}
          value={todoText}
          className="input-field"
        />
        <button
          onClick={handleClick(todoText)}
          className="add-task-btn"
        >
          {"Add Task"}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todoText: store.get('todoText', '')
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (todoText) => {
      return () => {
        dispatch({
          type: "SET_TODO_ITEM",
          data: todoText
        })
      }
    },
    handleChange: () => {
      return e => {
        dispatch({
          type: "SET_TEXT",
          data: e.target.value
        })
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
