import React, { useState } from "react";
import { TodoForm } from "./components/Form/Form";
import { Todos } from "./components/Todo/Todos";
import { deleteAll } from "./ducks/todo.duck";
import { Button, Container, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ButtonAppBar from "./components/AppBar/AppBar";
import Theme from "./theme/ThemeButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./ducks/thunk";

const Wrapper = styled(Container)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
}));

const DeleteAllBtn = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          minHeight: "100vh", // Обеспечивает, чтобы цвет фона распространялся на всю высоту страницы
        }}
      >
        <Theme darkMode={darkMode}>
          <ButtonAppBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Wrapper component="main" maxWidth="xs">
            <Typography variant="h5">TODO-APP USING REACT-REDUX</Typography>
            <TodoForm
              editFormVisibility={editFormVisibility}
              editTodo={editTodo}
              cancelUpdate={cancelUpdate}
            />
            <Todos
              handleEditClick={handleEditClick}
              editFormVisibility={editFormVisibility}
            />
            <DeleteAllBtn
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => dispatch(deleteAll())}
            >
              DELETE ALL
            </DeleteAllBtn>
          </Wrapper>
        </Theme>
      </div>
    </>
  );
};

export default App;
