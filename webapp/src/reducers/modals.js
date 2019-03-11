import { DISPLAY_MODAL } from '../actions/modals';

export const initialState = {
  displayModal: null
};

const modals = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return { displayModal: action.payload };
    default:
      return state;
  }
};

export default modals;
