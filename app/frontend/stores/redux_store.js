const createStore = require('redux').createStore;
const reducer = require('../reducers/reducer');


/*
  State Structure
  {
    ENTER_MODAL_STATUS: null,
    CURRENT_USER: {
      isFetching: false,
      id: -1,
      username: '',
      email: ''
    }
  }

*/

const Store = createStore(reducer);

module.exports = Store;