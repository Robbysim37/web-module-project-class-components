import React from 'react'

export default class Todo extends React.Component {
  
  clickHandler = (e) => {
    this.props.itemClickHandler(e)
  }
  
  
  render() {

      // itemClickHandler = () => {
      //   //runs whatever function we pass down
      //   //remember to add the 'onClick' to the div
      // }
    return (
      <div onClick={this.clickHandler} id={this.props.item.id}>
        {this.props.item.completed ? this.props.item.name + "  ---  completed" : this.props.item.name}
      </div>
    )
  }
}
