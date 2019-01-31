import React from "react";
import { uuid } from '../index.js';
import "normalize.css";
import "../styles/main.css";
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
