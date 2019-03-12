import { combineReducers } from 'redux';
import modals from './modals';
import lists from './lists';

const reducers = combineReducers({
  modals,
  lists
});

export default reducers;
