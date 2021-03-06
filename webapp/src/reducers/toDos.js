import {
  GET_TODOS_SUCCESSFUL,
  TOGGLE_TODO_STATUS,
  UPDATE_TODO_DESCRIPTION,
  DELETE_TASK,
  CREATE_TASK
} from '../actions/toDos';

const initialState = {
  listOfToDos: []
};

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESSFUL:
      return { ...state, listOfToDos: action.payload };
    case TOGGLE_TODO_STATUS:
      return { ...state, listOfToDos: action.payload };
    case UPDATE_TODO_DESCRIPTION:
      return { ...state, listOfToDos: action.payload };
    case DELETE_TASK:
      return { ...state, listOfToDos: action.payload };
    case CREATE_TASK:
      return { ...state, listOfToDos: action.payload };
    default:
      return state;
  }
};

export default toDos;
