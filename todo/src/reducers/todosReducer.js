import { ADD_TODO } from '../actions/addTodo';

const firstState = {
  todos: [
    {value: 'walk the dog', completed: false},
    {value: 'do some fings', completed: false}
  ]
}

const todosReducer = (todos, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...todos, action.payload]
      default:
        return todos;
    }
};


export default todosReducer;