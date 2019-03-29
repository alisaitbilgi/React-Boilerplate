import React, { Component } from "react";
import I from "immutable";
import { connect } from "react-redux";

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

const mapStateToProps = (store) => {
  return {
    todoItems: store.get('todoItems', I.List())
  }
};

export default connect(mapStateToProps)(TodoList);
