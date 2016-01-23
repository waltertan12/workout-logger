const React = require('react');
const Navbar = require('../components/navbar');

const Dashboard = React.createClass({
  render: function () {
    document.title = 'Dashboard | YouAreWeakApp';
    return (
      <div>
        <div className='container'>
          <h1>Dashboard</h1>
          <div className='row'>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;