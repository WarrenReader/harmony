export const DISPLAY_MODAL = 'DISPLAY_MODAL';

export const displayModal = (modalName = null) => ({
  type: DISPLAY_MODAL,
  payload: modalName
});
