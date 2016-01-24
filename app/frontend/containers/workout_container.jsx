const React = require('react');
const Navbar = require('../components/navbar');
const ExercisesIndex = require('../components/exercises/exercises_index');
const WorkoutForm = require('../components/workouts/workout_form');

const WorkoutContainer = React.createClass({
  render: function () {
    document.title = 'Log | YouAreWeakApp';
    var exercises = [
      '2-Position Snatch',
      '3-Position Snatch',
      'Hang Power Snatch (Below Knee)',
      'Hang Power Snatch (High Hang)',
      'Hang Power Snatch',
      'Hang Snatch (Below Knee)',
      'Hang Snatch (High Hang)',
      'Hang Snatch',
      'Power Snatch',
      'Snatch',
      'Snatch Balance',
      'Snatch Complex'
    ];

    return (
      <div className='container'>
        <div className='row'>
          <div className='container'>
            <h2>Log Your Workout</h2>
          </div>
          <ExercisesIndex exercises={ exercises } />
          <WorkoutForm />
        </div>
      </div>
    );
  }
});

module.exports = WorkoutContainer;

