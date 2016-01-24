const React = require('react');
const WorkoutFormExerciseIndexItem = require('./workout_form_exercise_index_item');
const WorkoutNotes = require('./workout_notes');

const WorkoutForm = React.createClass({
  render: function () {
    var exercises = [
      'Clean and Jerk',
      'Split Jerk',
      'Front Squat'
    ];

    var exercisesItems = exercises.map((e, i) => {
      return (
        <WorkoutFormExerciseIndexItem exercise={e} key={i} />
      );
    });

    var today = new Date();

    return (
      <div className='col-md-8 workout-pane'>
        <h3><strong>Workout for { today.toDateString() }</strong></h3>
        <ul className='workout-form-exercise-index'>
          { exercisesItems }
        </ul>
        <WorkoutNotes />
        <button className='button button-green transition'>
          Log Workout
        </button>
      </div>
    );
  }
});

module.exports = WorkoutForm;