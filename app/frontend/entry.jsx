const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const IndexRedirect = require('react-router').IndexRedirect;
const browserHistory = require('history').browserHistory;
const $ = require('./utils/zepto.min');

// Components
const App = require('./containers/app');
const LandingPage = require('./components/landing_page');

var root = 'content';

var routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ LandingPage } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById(root));
  $.ajaxSettings.headers || ($.ajaxSettings.headers = {});
  $.ajaxSettings.headers['X-CSRF-TOKEN'] = $("meta[name='csrf-token']").attr('content');
}, false);
