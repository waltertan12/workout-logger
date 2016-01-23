const createStore = require('redux').createStore;
const applyMiddleware =  require('redux').applyMiddleware;
const reducer = require('../reducers/reducer');
const thunk = require('redux-thunk');

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const Store = createStoreWithMiddleware(reducer);

module.exports = Store;