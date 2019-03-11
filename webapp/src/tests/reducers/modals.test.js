import modals, { initialState } from '../../reducers/modals';
import { DISPLAY_MODAL } from '../../actions/modals';

describe('Modals Reducer', () => {
  it('State initialized correctly', () => {
    const state = modals(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('State updated correctly', () => {
    const state = modals(initialState, {
      type: DISPLAY_MODAL,
      payload: 'TEST'
    });
    expect(state).toEqual({ displayModal: 'TEST' });
  });
});
