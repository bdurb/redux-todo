import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
     }
  }

  handleSubmit = (e) => {
    this.setState({ value: e.target.value})
  }

  handleAddTodo = e => {
    const { value } = this.state;
    const newTodo = {
      value,
      completed: false
    };
    this.props.addTodo(newTodo);
    this.setState({ value: ''})
  }
  render() { 
    return (
      <form>
        <input onChange={this.handleSubmit} placeholder="put your todo here" />
        <button onSubmit={this.props.handleAddTodo}>Add Todo!</button>
      </form>
    );
  }
}
 
export default connect({addTodo})(TodoForm);