import React, { Component } from 'react';
import './css/App.css';

import Input from './components/input.js'
import Todo from './components/todo.js'

class App extends Component {
  state = {
    value: '',
    todos: ['abc'],
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

  handleEdit = e => {
    
  }

  handleDelete = index => {
    let array = this.state.todos;
    array.splice(index, 1);
    this.setState({ todos: array })
  }

  renderTodos = e => {
    return this.state.todos.map((todo, idx) => {
      console.log('render todo', todo);
      return (
        <Todo
          key={idx}
          data={todo}
          index={idx}
          onDelete={this.handleDelete}/>
      )

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
        <div className="todo-container">
          {this.renderTodos()}
        </div>

      </div>
    );
  }
}

export default App;
