import React from 'react';
import { uuid } from '../index.js';

export default class TodoForm extends React.Component {

  render() {

    return (
      <form className="form-container">
        <input
          className="input-field"
          placeholder={"Task Description"}
        />
        <button
          className="add-task-btn"
        >
          {"Add Task"}
        </button>
      </form>
    )
  }
}
