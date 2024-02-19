import { ADD_TODO, DELETE_ALL, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actions';

const initialState = [];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case FETCH_TODOS_SUCCESS:
      return Object.values(action.payload); 
    case FETCH_TODOS_FAILURE:
      console.error(action.payload);
      return state;
    default:
      return state;
  }
};
