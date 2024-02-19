export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});

export const fetchTodosSuccess = (payload) => ({
  type: FETCH_TODOS_SUCCESS,
  payload,
});

export const fetchTodosFailure = (payload) => ({
  type: FETCH_TODOS_FAILURE,
  payload,
});

export const fetchTodos = () => async (dispatch) => {

  try {
    const response = await fetch(
      "https://mockapi.io/projects/65d0f96fab7beba3d5e3f426#"
    );
    const data = await response.json();

    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};
