import { combineReducers } from 'redux';
import modals from './modals';
import lists from './lists';
import toDos from './toDos';

const reducers = combineReducers({
  modals,
  lists,
  toDos
});

export default reducers;
