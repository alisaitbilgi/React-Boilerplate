import React, { Component } from "react";
import "../styles/main.css";
import { connect } from "react-redux";

class TodoForm extends Component {
  render() {
    return (
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input-field"
          value={this.props.todoText}
          onChange={e => this.props.setText(e.target.value)}
        />
        <button className="add-task-btn">
          {"Add Task"}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todoText: store.todoText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    setText: text => {
      dispatch({
        type: "SET_TEXT",
        data: text
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
