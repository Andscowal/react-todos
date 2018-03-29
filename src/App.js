import React, { Component } from "react";
import Add from "./Add";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onType = e => {
    this.setState({ currentTodo: e.target.value });
  };

  onClick = () => {
    let copied = this.state.todos.slice();
    copied.push(this.state.currentTodo);
    this.setState({ todos: copied, currentTodo: "" });
  };

  deleteTodo = i => {
    let copied = this.state.todos.slice();
    copied.splice(i, 1);
    this.setState({ todos: copied });
  };

  render() {
    let list = this.state.todos.map((e, i) => {
      return <Add todo={e} delete={() => this.deleteTodo(i)} />;
    });
    return (
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        <h1>What do you have to do?</h1>
        <br />
        <input
          placeholder="Enter something to do"
          value={this.state.currentTodo}
          onChange={this.onType}
        />
        <button onClick={this.onClick}>Add</button>
        <br style={{ lineHeight: "50px" }} />
        {this.state.todos.length === 0 ? (
          "You have nothing to do!"
        ) : (
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        )}
      </div>
    );
  }
}

export default App;
