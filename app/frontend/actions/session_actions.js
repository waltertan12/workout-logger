const SessionApiUtils = require('../utils/session_api_utils');

const SessionActions = {
  loginCurrentUser: (credentials) => {
    return { type: Constants.LOGIN_CURRENT_USER, credentials };
  },
  receiveCurrentUser: (user) => {
    return { type: Constants.RECEIVE_CURRENT_USER, user}
  },
  logoutCurrentUser: () => {
    return { type: Constants.LOGOUT_CURRENT_USER };
  }
};

module.exports = SessionActions;