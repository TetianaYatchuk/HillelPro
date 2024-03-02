import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

import { removeTodo, updateCheckbox } from "../../ducks/todo.duck";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const updateCheckboxChange = (id) => {
    dispatch(updateCheckbox(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <ListItem key={todo.id} disablePadding>
          <div className="content">
            {editFormVisibility === false && (
              <Checkbox
                checked={todo.completed}
                onChange={() => updateCheckboxChange(todo.id)}
              />
            )}
            <ListItemText>
              <Typography
                variant="body1"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.todo}
              </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              {editFormVisibility === false && (
                <>
                  <IconButton edge="end" onClick={() => handleEditClick(todo)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </ListItemSecondaryAction>
          </div>
        </ListItem>
      ))}
    </div>
  );
};
