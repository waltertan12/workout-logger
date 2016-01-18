const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const IndexRedirect = require('react-router').IndexRedirect;
const browserHistory = require('history').browserHistory;

// Components
const App = require('./components/app');
const SignIn = require('./components/sign_in');
const LandingPage = require('./components/landing_page');

var root = 'content';

var routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ LandingPage } />
      
      <Route path='sign_in' component={ SignIn } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById(root));
}, false);
