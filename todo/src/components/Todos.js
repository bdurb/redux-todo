import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo key={Math.random()} todo={todo} />
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