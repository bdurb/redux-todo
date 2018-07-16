
const firstState = {
  todos: [
    {value: 'walk the dog', completed: false},
    {value: 'do some fings', completed: false}
  ]
}

const todosReducer = (state = firstState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...todos, action.payload]
      default:
        return state;
    }
};


export default todosReducer;