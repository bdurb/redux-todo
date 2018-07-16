import React from 'react';

const Todo = props => {
  return (
    <div>
      {props.todo.value}
    </div>
  );
}
 
export default Todo;