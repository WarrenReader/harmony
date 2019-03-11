import { displayModal, DISPLAY_MODAL } from '../../actions/modals';

describe('Test Modals.js Action', () => {
  it('Correct Action Object Created', () => {
    const obj = displayModal('TEST');
    expect(obj).toEqual({ type: DISPLAY_MODAL, payload: 'TEST' });
  });

  it('Correct Action Object Created', () => {
    const obj = displayModal();
    expect(obj).toEqual({ type: DISPLAY_MODAL, payload: null });
  });
});
