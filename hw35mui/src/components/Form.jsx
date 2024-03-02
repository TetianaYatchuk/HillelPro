import React, { useState } from "react";
import MaterialForm from "./MaterialForm";

const OldForm = () => {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (newTodo) => {
    setTodo(newTodo);
  };

  const handleSubmitOldForm = (e) => {
    e.preventDefault();

    handleTodoChange(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmitOldForm}>
        <input
          type="text"
          value={todo}
          onChange={(e) => handleTodoChange(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <MaterialForm todoFromOldForm={todo} />
    </div>
  );
};

export default OldForm;
