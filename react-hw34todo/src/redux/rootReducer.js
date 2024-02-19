import { combineReducers } from 'redux';
import { operationsReducer } from '../redux/todoapp/reducers/operations';

export const rootReducer = combineReducers({
  operationsReducer,
});
