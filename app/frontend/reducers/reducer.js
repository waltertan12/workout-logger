const Immutable = require('immutable');
const ModalActions = require('../actions/modal_actions');

const INITIAL_STATE = Immutable.Map();

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_ENTER_MODAL':
      return state.set('ENTER_MODAL_STATUS', 'show-enter-modal');
    case 'HIDE_ENTER_MODAL':
      return state.set('ENTER_MODAL_STATUS', 'hide-enter-modal');
  }
  return state;
};

module.exports = reducer;