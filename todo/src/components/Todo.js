import React from 'react';

const Todo = props => {
  console.log(props)
  return (
    <div onClick={() => props.toggleComplete(props.todo.id)} style={props.todo.completed ? {color: 'red', textDecoration: 'line-through'} : null}>
      {props.todo.text}
    </div>
  );
}
 
export default Todo;