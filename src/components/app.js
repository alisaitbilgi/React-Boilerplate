import React, { Component } from "react";
import TodoForm from './todoForm';
import TodoList from './todoList';
import "../styles/main.css";
import { createStore } from "redux";
import reducer from "../reducers/reducer.js";

class App extends Component {
  constructor(props){
    super(props);
    this.store = createStore(reducer);
    this.state = {
      main: {
        todoText: "",
        todoItems: ["Do workshop", "Make presentation", "Say hello"]
      }
    };
  }

  componentDidMount() {
    this.store.subscribe(() => {
      this.setState({
        main: this.store.getState()
      });
    });
  }

  render() {
    const { todoText, todoItems } = this.state.main;
    const { dispatch } = this.store;

    return (
      <div className="app">
        <TodoForm
          todoText={todoText}
          dispatch={dispatch}
        />
        <TodoList
          todoItems={todoItems}
        />
      </div>
    );
  }
}

export default App;
