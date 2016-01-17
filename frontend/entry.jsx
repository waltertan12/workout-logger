const React = require('react');
const ReactDOM = require('react-dom');

var root = 'content';

var Test = React.createClass({
  render: () => {
    return <h1>Hello, world!</h1>;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Test/>, document.getElementById(root));
}, false);
