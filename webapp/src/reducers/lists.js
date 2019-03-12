import {
  RETREIVING_LISTS,
  GET_LISTS_SUCCESSFUL,
  TOGGLE_LIST
} from '../actions/lists';

const initialState = {
  lists: [],
  fetching: false,
  fetchError: false,
  toggledListId: null
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case RETREIVING_LISTS:
      return { ...state, fetching: true, fetchError: false };

    case GET_LISTS_SUCCESSFUL:
      return {
        ...state,
        lists: action.payload,
        fetching: false,
        fetchError: false
      };

    case TOGGLE_LIST:
      return { ...state, toggledListId: action.payload };

    default:
      return state;
  }
};

export default lists;
