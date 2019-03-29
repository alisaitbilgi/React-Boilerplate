import React, { Component } from "react";
import "../styles/main.css";

class TodoList extends Component {
  render() {
    const { todoItems } = this.props;

    return (
      <div className="list-container">
        {
          todoItems &&
          todoItems.map((eachTodo, idx) => (
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
