import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
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
      completed: false,
      id: Math.random()
    }
    this.props.addTodo(newTodo);
    this.setState({ value: ''})
  };
  
  render() { 
    return (
      <form>
        <input onChange={this.handleSubmit} placeholder="put your todo here" value={this.state.value} />
        <button onSubmit={this.handleAddTodo}>Add Todo!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
export default connect(mapStateToProps,{ addTodo })(TodoForm);