import React from 'react'

class Todo extends React.Component {
  render () {
    console.log('Todo', this.props);
    return (
      <li>{this.props.data}</li>
    )

  }
}

export default Todo;
