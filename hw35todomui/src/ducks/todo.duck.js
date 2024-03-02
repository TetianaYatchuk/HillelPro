import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./thunk";

const initialState = {
  todos: [],
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteAll: (state) => {
      state.todos = [];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    updateCheckbox: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].completed = action.payload.completed;
      }
    },
    fetchTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.error = null;
    },
    fetchTodosFailure: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  addTodo,
  deleteAll,
  removeTodo,
  updateTodo,
  updateCheckbox,
  fetchTodosSuccess,
  fetchTodosFailure,
} = todoSlice.actions;

export default todoSlice.reducer;
