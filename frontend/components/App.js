import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isHidden: false,
      idGenerator: 0,
      nameBuilder: "",
      todoList: [],
    }
  }

  submitHandler = e => {
    e.preventDefault()
    this.setState({todoList: [...this.state.todoList,{
      name:this.state.nameBuilder,
      id: this.state.idGenerator,
      key: this.state.idGenerator,
      completed: false
    }]})
    this.setState({idGenerator: this.state.idGenerator += 1})
    console.log(this.state.todoList)
  }

  onInputChange = (e) => {
    this.setState({nameBuilder: e.target.value})
    console.log(this.state.nameBuilder)
  }

  toDoItemClickHandler = (e) => {
    let updatedItems = [...this.state.todoList]
    updatedItems.forEach(item => {
      if(item.id == e.target.id){
        item.completed = !item.completed
      }})
    this.setState({todoList: updatedItems})
    console.log(this.state.todoList)
  }

  toggleButtonClickHandler = () => {
    this.setState({isHidden: !this.state.isHidden})
    console.log(this.state.isHidden)
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.isHidden ? this.state.todoList.filter(el => !el.completed) : this.state.todoList} itemClickHandler={this.toDoItemClickHandler}></TodoList>
        <Form 
        isHidden={this.state.isHidden}
        toggleButtonClickHandler={this.toggleButtonClickHandler} 
        submitHandler={this.submitHandler} 
        inputChangeHandler={this.onInputChange}/>
      </div>
    )
  }
}
