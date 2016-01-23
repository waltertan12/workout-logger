const React = require('react');
const Navbar = require('../components/navbar');

const Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
        <h1>Dashboard</h1>
      </div>
    );
  }
});

module.exports = Dashboard;