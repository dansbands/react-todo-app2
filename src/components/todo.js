import React from 'react'

class Todo extends React.Component {
  render () {
    console.log('Todo', this.props);
    return (
      <div className="panel-wrapper">
        <div className="panel panel-default width-80">
          <div className="panel-body">
            {this.props.data}
            <span
              className="glyphicon glyphicon-trash pull-right"
              onClick={() => this.props.onDelete(this.props.index)}
              />
          </div>
        </div>
        <div className="chevrons pull-right">
          <span className="glyphicon glyphicon-chevron-up" onClick={() => this.props.orderUp(this.props.index)}> </span>
          <span className="glyphicon glyphicon-chevron-down" onClick={() => this.props.orderDown(this.props.index)}> </span>
        </div>
      </div>
    )
  }
}

export default Todo;
