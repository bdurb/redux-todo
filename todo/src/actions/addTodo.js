export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';


export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    payload: id
  }
}

export const deleteTodos = todos => {
  return {
    type: "DELETE_TODOS",
  }
}