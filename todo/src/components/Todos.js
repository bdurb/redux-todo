import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoForm from './TodoForm';


const Todos = props => {
  console.log(props)
  return (
    <div>
    <TodoForm />
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state
  }
}
 
export default connect(mapStateToProps)(Todos);