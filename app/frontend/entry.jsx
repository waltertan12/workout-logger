const React = require('react');
const ReactDOM = require('react-dom');
const Router = require("react-router").Router;
const Route = require("react-router").Route;
const IndexRoute = require("react-router").IndexRoute;
const IndexRedirect = require("react-router").IndexRedirect;
const createHistory = require("history").createHistory;

// Components
const App = require('./components/app');

var root = 'content';

var routes = (
  <Router history={ createHistory() }>
    <Route name='app' path='/' component={ App } />
  </Router>
);


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById(root));
}, false);
