import toDos from '../data/toDos.json';

export const GET_TODOS_SUCCESSFUL = 'GET_TODOS_SUCCESSFUL';
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';
export const UPDATE_TODO_DESCRIPTION = 'UPDATE_TODO_DESCRIPTION';

export const getToDos = () => ({
  type: GET_TODOS_SUCCESSFUL,
  payload: toDos.toDos
});

export const toggleToDoStatus = toDoId => {
  return (dispatch, getState) => {
    const {
      toDos: { listOfToDos }
    } = getState();

    // This updates the completed status of a toDo
    const updatedList = listOfToDos.map(toDo => {
      return toDo.taskId === toDoId
        ? { ...toDo, completed: !toDo.completed }
        : toDo;
    });

    dispatch({
      type: TOGGLE_TODO_STATUS,
      payload: updatedList
    });
  };
};

export const updateStatusDescription = (description, toDoId) => {
  return (dispatch, getState) => {
    const {
      toDos: { listOfToDos }
    } = getState();

    // This updates the description of a toDo
    const updatedList = listOfToDos.map(toDo => {
      return toDo.taskId === toDoId
        ? { ...toDo, description: description }
        : toDo;
    });

    dispatch({
      type: UPDATE_TODO_DESCRIPTION,
      payload: updatedList
    });
  };
};
