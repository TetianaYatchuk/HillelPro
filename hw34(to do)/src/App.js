import React from "react";
import { Provider } from "react-redux";
import './App.css';
import store from "./component/store/store";
import TodoList from "./component/forms/todo";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
