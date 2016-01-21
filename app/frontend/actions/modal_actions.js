const ModalActions = {
  showEnterModal: () => {
    return { type: 'SHOW_ENTER_MODAL' };
  },
  hideEnterModal: () => {
    return { type: 'HIDE_ENTER_MODAL' };
  }
};

module.exports = ModalActions;