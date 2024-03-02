import { useState } from "react";
import "./App.css";
import Theme from "./theme/ThemeButton";
import MaterialForm from "./components/MaterialForm";
import ButtonAppBar from "./components/AppBar";
import Switch from "@mui/material/Switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleTodoChange = (todo) => {
    console.log("Todo changed:", todo);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <Theme darkMode={darkMode}>
        <ButtonAppBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <MaterialForm onTodoChange={handleTodoChange} />
      </Theme>
    </div>
  );
}

export default App;
