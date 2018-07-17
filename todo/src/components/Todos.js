import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { toggleTodo, deleteTodos } from '../actions/addTodo';


class Todos extends Component {
  

  handleToggleTodo = todoid => {
    this.props.toggleTodo(todoid)
  };

  handleDeleteCompleted = () => {
    this.props.deleteTodos()
  };

  render() {
    return (
      <div>
      <TodoForm />
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleComplete={this.handleToggleTodo} deleteAll={this.props.handleDeleteCompleted} />
        ))}
        <button onClick={() => this.handleDeleteCompleted()}>Delete Completed</button>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    todos: state
  }
}
 
export default connect(mapStateToProps, {toggleTodo, deleteTodos})(Todos);