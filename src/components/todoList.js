import React, { Component } from "react";
import "../styles/main.css";

class TodoList extends Component {
  render() {
    return (
      <div className="list-container">
        {
          this.props.todoItems &&
          this.props.todoItems.map((eachTodo, idx) => (
            <div className="each-todo" key={idx}>
              <span>{eachTodo}</span>
              <button className="delete-icon">{"X"}</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TodoList;
