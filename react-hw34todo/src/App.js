import { useSelector } from 'react-redux';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {deleteAll} from './redux/todoapp/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './redux/todoapp/actions';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form/>
      <Todos/>
      {todos.length > 1&&(
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;