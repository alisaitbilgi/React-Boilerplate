import React from 'react';

export default class TodoList extends React.Component {

  render() {

    return (
      <div className="list-container">
        <div className="each-todo">
          <span>{'todo 1: complete workshop'}</span>
          <button
            className="delete-icon"
          >
            {"X"}
          </button>
        </div>
      </div>
    )
  }
}
