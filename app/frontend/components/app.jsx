const React = require('react');
const Dashboard = require ('./dashboard');

var App = React.createClass({
  render: () => {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
})

module.exports = App;