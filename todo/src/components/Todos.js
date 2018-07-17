import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoForm from './TodoForm';

const Todos = props => {
  return (
    <div>
    <TodoForm />
      {props.todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
export default connect(mapStateToProps) (Todos);