import listsData from '../data/lists.json';

export const RETREIVING_LISTS = 'RETREIVING_LISTS';
export const GET_LISTS_SUCCESSFUL = 'GET_LISTS_SUCCESSFUL';
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

export const toggleList = listId => ({
  type: TOGGLE_LIST,
  payload: listId
});
