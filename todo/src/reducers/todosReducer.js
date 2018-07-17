import { ADD_TODO } from '../actions/addTodo';

const firstState = {
  todos: [
    {text: 'walk the dog', completed: false},
    {text: 'do some fings', completed: false}
  ]
}

const todosReducer = (todos = firstState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...todos, action.payload]
      default:
        return todos;
    }
};


export default todosReducer;