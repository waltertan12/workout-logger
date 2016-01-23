const createStore = require('redux').createStore;
const applyMiddleware =  require('redux').applyMiddleware;
const reducer = require('../reducers/reducer');
const thunk = require('redux-thunk');

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

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const Store = createStoreWithMiddleware(reducer);

module.exports = Store;