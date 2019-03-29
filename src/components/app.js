import React, { Component } from "react";
import TodoForm from './todoForm';
import TodoList from './todoList';
import "../styles/main.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoForm/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
