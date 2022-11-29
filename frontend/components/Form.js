import React from 'react'

export default class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <input type="text" onChange={this.props.inputChangeHandler}></input>
        <button type='submit'>Add todo</button>
        <br></br>
        <button>Hide completed</button>
      </form>
    )
  }
}
