const Constants = require('../constants/constants.js');

const ModalActions = {
  showEnterModal: () => {
    return { type: Constants.SHOW_ENTER_MODAL };
  },
  hideEnterModal: () => {
    return { type: Constants.HIDE_ENTER_MODAL };
  }
};

module.exports = ModalActions;