const React = require('react');
const WorkoutFormExerciseIndexItem = require('./workout_form_exercise_index_item');

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

    return (
      <div className='col-md-8 workout-pane'>
        <h3>Workout Form</h3>
        <ul className='workout-form-exercise-index'>
          { exercisesItems }
        </ul>
      </div>
    );
  }
});

module.exports = WorkoutForm;