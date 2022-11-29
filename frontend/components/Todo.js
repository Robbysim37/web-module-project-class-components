import React from 'react'

export default class Todo extends React.Component {
  render() {

      // itemClickHandler = () => {
      //   //runs whatever function we pass down
      //   //remember to add the 'onClick' to the div
      // }
    return (
      <div>
        {this.props.item}
      </div>
    )
  }
}
