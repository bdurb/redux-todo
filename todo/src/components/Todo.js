import React from 'react';

const Todo = props => {
  return (
      <div className="todo" onClick={() => props.toggleComplete(props.todo.id)} style={props.todo.completed ? {color: 'whitesmoke', textDecoration: 'line-through', fontSize: '12px'} : {color: '#FE5631'}}>
        {props.todo.text}
      </div>
  );
}
 
export default Todo;