import React from 'react'

class Input extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        />

      <button>Submit</button>
      </form>
    )
  }
}

export default Input;
