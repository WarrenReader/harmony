import listsData from '../data/lists.json';
import uuid from 'uuid/v4';
import { displayModal } from './modals';

export const RETREIVING_LISTS = 'RETREIVING_LISTS';
export const GET_LISTS_SUCCESSFUL = 'GET_LISTS_SUCCESSFUL';
export const NEW_LIST = 'NEW_LIST';
export const TOGGLE_LIST = 'TOGGLE_LIST';

export const retreivingLists = () => ({
  type: RETREIVING_LISTS
});

export const getLists = () => {
  return dispatch => {
    dispatch(retreivingLists());

    setTimeout(
      () =>
        dispatch({
          type: GET_LISTS_SUCCESSFUL,
          payload: listsData.lists
        }),
      2000
    );
  };
};

export const addList = listName => {
  return dispatch => {
    const listObj = {
      name: listName,
      id: uuid()
    };
    dispatch({ type: NEW_LIST, payload: listObj });
    dispatch(displayModal(null));
    dispatch(toggleList(listObj.id));
  };
};

export const toggleList = listId => {
  return dispatch => {
    dispatch({ type: TOGGLE_LIST, payload: listId });
  };
};
