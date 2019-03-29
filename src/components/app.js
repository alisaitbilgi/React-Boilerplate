import React, { Component } from "react";
import "../styles/main.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: "",
      todoItems: ["Do workshop", "Make presentation", "Say hello"]
    };
  }

  handleChange() {
    return e => {
      this.setState({
        todoText: e.target.value
      })
    }
  }

  handleClick() {
    return () => {
      const { todoItems, todoText } = this.state;
      const newTodoItems = todoItems.set(todoText);

      this.setState({
        todoItems: newTodoItems
      })
    }
  }

  render() {
    const { todoItems, todoText } = this.state;

    return (
      <div className="app">
        <form className="form-container" onSubmit={(e) => e.preventDefault()}>
          <input
            className="input-field"
            onChange={this.handleChange()}
            value={todoText}
          />
          <button
            className="add-task-btn"
            onClick={this.handleClick()}
          >
            {"Add Task"}
          </button>
        </form>
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
      </div>
    );
  }
}

export default App;
