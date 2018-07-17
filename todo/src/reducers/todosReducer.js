import { ADD_TODO, TOGGLE_TODO } from '../actions/addTodo';



const firstTodos = [
    {text: 'walk the dog', completed: false, id: 0},
    {text: 'do some fings', completed: false, id: 1}
  ]


const todosReducer = (todos = firstTodos, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...todos, action.payload]
      case TOGGLE_TODO:
        return todos.map(todo => {
          if (todo.id === action.payload) {
            return Object.assign({}, todo, {completed: !todo.completed})
          }
          return todo;
        });
      default:
        return todos;
    }
};


export default todosReducer;