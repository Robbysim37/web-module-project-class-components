import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.todoList.map(el => {return <Todo item ={el}/>})}
      </div>
    )
  }
}
