const Immutable = require('immutable');
const Map = Immutable.Map;
const ModalActions = require('../actions/modal_actions');
const Constants = require('../constants/constants');

const INITIAL_STATE = Map({
  SHOW_ENTER_MODAL: 'hide-enter-modal',
  CURRENT_USER: Map({
    isFetching: false,
    id: null,
    username: null,
    email: null
  })
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Enter Modal
    case Constants.SHOW_ENTER_MODAL:
      return state.set('ENTER_MODAL_STATUS', 'show-enter-modal');
    case Constants.HIDE_ENTER_MODAL:
      return state.set('ENTER_MODAL_STATUS', 'hide-enter-modal');

    // Sessions
    case Constants.LOGIN_CURRENT_USER:
      return state.setIn(['CURRENT_USER', 'isFetching'], true);
    case Constants.RECEIVE_CURRENT_USER:
      return (state.set('CURRENT_USER', Map({
          isFetching: false,
          id: action.user.id,
          username: action.user.username,
          email: action.user.email        
        }))
      );
    case Constants.LOGOUT_CURRENT_USER:
      return;(state.set('CURRENT_USER', Map({
          isFetching: false,
          id: null,
          username: null,
          email: null        
        }))
      );
  }
  return state;
};

module.exports = reducer;