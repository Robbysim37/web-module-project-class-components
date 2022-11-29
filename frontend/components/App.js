import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      todoBuilder: {name:"",id:0,completed:false},
      todoList: [],
      test:"test"
    }
  }

  submitHandler = e => {
    e.preventDefault()
    this.setState({todoList: [...this.state.todoList,this.state.name]})
    console.log(this.state.todoList)
  }

  onInputChange = (e) => {
    this.setState({name: e.target.value})
    console.log(this.state.name)
  }

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} test={this.state.test}></TodoList>
        <Form submitHandler={this.submitHandler} inputChangeHandler={this.onInputChange}/>
      </div>
    )
  }
}
