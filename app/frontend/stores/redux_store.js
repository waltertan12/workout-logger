const createStore = require('redux').createStore;
const reducer = require('../reducers/reducer');

const Store = createStore(reducer);

module.exports = Store;