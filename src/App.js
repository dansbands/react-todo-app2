import React, { Component } from 'react';
import './css/App.css';

import Input from './components/input.js'
import Todo from './components/todo.js'

class App extends Component {
  state = {
    value: '',
    todos: [],
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        this.state.value
      ],
      value: ''
    })
  }

  renderTodos = e => {
    return this.state.todos.map((todo, idx) => {
      console.log('render todo', todo);
      return <Todo key={idx} data={todo} />
    })
  }

  render() {
    // console.log('todos', this.state);
    return (
      <div className="App">
        <h3>React To-Do App</h3>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ul>
          {this.renderTodos()}
        </ul>

      </div>
    );
  }
}

export default App;
