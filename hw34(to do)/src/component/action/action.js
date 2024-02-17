export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: id,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://mockapi.io/projects/65d0f96fab7beba3d5e3f426#"
    );
    const data = await response.json();

    dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_FAILURE", payload: error.message });
  }
};
