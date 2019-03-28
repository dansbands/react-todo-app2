import React from 'react'

class Todo extends React.Component {
  render () {
    console.log('Todo', this.props);
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {this.props.data}
          <span
            className="glyphicon glyphicon-trash pull-right"
            onClick={() => this.props.onDelete(this.props.index)}
          />
        </div>
      </div>
    )
  }
}

export default Todo;
