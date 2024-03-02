import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('FETCH_TODOS', async () => {
  try {
    const response = await fetch(
      "https://65d0f96fab7beba3d5e3f425.mockapi.io/todolist"
    );
    const data = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
});