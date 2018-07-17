import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
     }
  }

  handleSubmit = (e) => {
    this.setState({ text: e.target.value})
  }

  handleAddTodo = e => {
    e.preventDefault();
    const { text } = this.state;
    const newTodo = {
      text,
      completed: false,
      id: Math.random() + text
    };
    this.props.addTodo(newTodo);
    this.setState({ text: ''});
  };

  render() { 
    return (
      <form>
        <input onChange={this.handleSubmit} placeholder="put your todo here" value={this.state.text} />
        <button onClick={this.handleAddTodo}>Add Todo!</button>
      </form>
    );
  }
}

 
export default connect(null,{ addTodo })(TodoForm);