import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { toggleTodo } from '../actions/addTodo';


class Todos extends Component {
  

  handleToggleTodo = todoid => {
    this.props.toggleTodo(todoid)
  };

  render() {
    return (
      <div>
      <TodoForm />
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleComplete={this.handleToggleTodo}/>
        ))}
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    todos: state
  }
}
 
export default connect(mapStateToProps, {toggleTodo})(Todos);