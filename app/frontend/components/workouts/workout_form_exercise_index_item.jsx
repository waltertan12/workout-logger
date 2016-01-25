const React = require('react');
const WorkoutSetForm = require('./workout_set_form');

const WorkoutFormExerciseIndexItem = React.createClass({
  render: function () {
    var exercise = this.props.exercise,
        sets = [];

    for (var i = 1; i <= this.props.sets; i++) {
      sets.push(
        <WorkoutSetForm set={ i } exercise={ exercise } />
      );
    }

    return (
      <li className='workout-form-exercise-index-item'>
        <div className='workout-form-header'>
          <h4>{ exercise.toUpperCase() }</h4>
            <span className='workout-form-add-remove'>
            <button className='button button-blue transition'>
              Add Set&nbsp;&nbsp;&nbsp;
              <span className='glyphicon glyphicon-plus' />
            </button>
            </span>
        </div>

        { sets }

        <button className='button button-red transition'>
          Remove Exercise
        </button>
      </li>
    );
  }
});

module.exports = WorkoutFormExerciseIndexItem;