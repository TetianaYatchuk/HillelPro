import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addTodo, updateTodo } from '../../ducks/todo.duck';
import { boolean, object, string } from "yup";


export const TodoForm = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (editFormVisibility) {
      const editedObj = {
        id: editTodo.id,
        todo: values.todo,
        completed: false,
      };
      dispatch(updateTodo(editedObj));
    } else {
      const date = new Date();
      const time = date.getTime();
      const todoObj = {
        id: time,
        todo: values.todo,
        completed: false,
      };
      dispatch(addTodo(todoObj));
    }
    resetForm();
  };

  const initialValues = {
    todo: editFormVisibility ? editTodo.todo : "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form-group custom-form">
        <label>{editFormVisibility ? "Update" : "Add"} your todo-item</label>
        <div className="input-and-btn">
          <Field
            type="text"
            as={TextField}
            className="form-control"
            name="todo"
            required
          />
          <Button type="submit" className="btn btn-secondary btn-md">
            {editFormVisibility ? "Update" : "ADD"}
          </Button>
        </div>
        {editFormVisibility && (
          <Button
            type="button"
            className="btn btn-primary btn-md back-btn"
            onClick={cancelUpdate}
          >
            BACK
          </Button>
        )}
      </Form>
    </Formik>
  );
};