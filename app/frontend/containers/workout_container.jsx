const React = require('react');
const Navbar = require('../components/navbar');
const ExercisesIndex = require('../components/exercises/exercises_index');
const WorkoutForm = require('../components/workouts/workout_form');

const WorkoutContainer = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='container'>
            <h2>Log Your Workout</h2>
          </div>
          <ExercisesIndex />
          <WorkoutForm />
        </div>
      </div>
    );
  }
});

module.exports = WorkoutContainer;

