import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  removeTodo,
  fetchTodos,
} from "../action/action";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (todoText) => {
    dispatch(addTodo({ text: todoText, completed: false }));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="form">
      <h1>To do List</h1>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : Array.isArray(todos) ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <span onClick={() => handleCompleteTodo(todo.id)}>
                {todo.text}
              </span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))
        ) : null}
      </ul>
      <input
        type="text"
        placeholder="Enter to do..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default TodoList;
