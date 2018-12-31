import React, { Component } from "react";
import "normalize.css";
import "../styles/main.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: "",
      todoItems: []
    };
  }

  addTodo() {
    return () => {
      if (this.state.todoText.trim() !== "") {
        const newTodoItems = this.state.todoItems.set(this.state.todoText);

        this.setState({
          todoText: "",
          todoItems: newTodoItems
        })
      }
    }
  }

  removeTodo(index) {
    return () => {
      const newTodoItems = this.state.todoItems.filter((each, idx) => idx !== index);

      this.setState({
        todoText: "",
        todoItems: newTodoItems
      });
    }
  }

  setInputText() {
    return e => {
      this.setState({
        todoText: e.target.value
      });
    }
  }

  render() {
    return (
      <div className="app">
        <form className="form-container" onSubmit={(e) => e.preventDefault()}>
          <input
            className="input-field"
            placeholder={"Task Description"}
            value={this.state.todoText}
            onChange={this.setInputText()}
          />
          <button
            onClick={this.addTodo()}
            className="add-task-btn"
          >
            {"Add Task"}
          </button>
        </form>
        <div className="list-container">
          {
            this.state.todoItems.map((eachTodo, idx) => (
              <div className="each-todo" key={idx}>
                <span>{eachTodo}</span>
                <button
                  onClick={this.removeTodo(idx)}
                  className="delete-icon"
                >
                  {"X"}
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
