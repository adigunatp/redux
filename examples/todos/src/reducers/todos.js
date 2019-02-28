const todos = (state = [], action) => {
  let newState
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      console.log('masuk reducer')
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
        console.log('masuk reducer delet')
        newState = state.filter(todo => todo.id !== action.id )
        return newState
    case 'DUPLICATE_TODO':
        console.log('masuk dup reducer')
        newState = state.map(todo => todo)
        let sourceTodo = state.find(todo => todo.id === action.id)
        let targetTodo = {}
        Object.assign(targetTodo, sourceTodo)
        targetTodo.id = action.dupId
        newState.splice(newState.findIndex(todo => todo.id === action.id),0,targetTodo)
        console.log(targetTodo)
        return newState
    default:
      return state
  }
}

export default todos
