import React from 'react'

class Input extends React.Component {
  render () {
    return (
      <form className="form-inline" onSubmit={this.props.onSubmit}>
        <div className="row">
          <input
            className="form-control col-md-9"
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            />

          <button className="btn btn-default col-md-3">Submit</button>
        </div>
      </form>
    )
  }
}

export default Input;
