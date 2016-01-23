const React = require('react');
const Navbar = require('../components/navbar');

const Dashboard = React.createClass({
  render: function () {
    document.title = 'Dashboard | ' + document.title;
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>Dashboard</h1>
          <div className='row'>
            <div className='col-md-3 exercise-pane'>
              Exercise Pane
            </div>
            <div className='col-md-9 workout-pane'>
              Current Workout Pane
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;