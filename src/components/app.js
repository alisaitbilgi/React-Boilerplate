import React, { Component } from "react";
import TodoForm from './todoForm';
import TodoList from './todoList';
import I from 'immutable';
import "../styles/main.css";
import { createStore } from "redux";
import reducer from "../reducers/reducer.js";

class App extends Component {
  constructor(props){
    super(props);
    this.store = createStore(reducer);
    this.state = { main: I.Map() };
  }

  componentDidMount() {
    this.store.subscribe(() => {
      this.setState({
        main: this.store.getState()
      });
    });
  }

  render() {
    const { dispatch } = this.store;
    const { main } = this.state;
    const todoText = main.get('todoText', '');
    const todoItems = main.get('todoItems', I.List());

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
