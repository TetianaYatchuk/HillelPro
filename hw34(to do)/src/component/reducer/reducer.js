const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_TODOS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
