const React = require('react');

const WorkoutFormExerciseIndexItem = React.createClass({
  render: function () {
    var exercise = this.props.exercise;
    return (
      <li className='workout-form-exercise-index-item'>
        <form>
          <div className='workout-form-header'>
            <h4>{ exercise.toUpperCase() }</h4>
              <span className='workout-form-add-remove'>
              <button className='button button-blue transition'>
                Add Set&nbsp;&nbsp;&nbsp;
                <span className='glyphicon glyphicon-plus' />
              </button>
              <button className='button button-orange transition'>
                Remove Set&nbsp;&nbsp;&nbsp;
                <span className='glyphicon glyphicon-minus' />
              </button>
              </span>
          </div>

          <div className='workout-set'>
            <label>Set #</label>
            <div className='workout-form-input'>1</div>
          </div>
          <div className='workout-input-group'>
            <label>Reps</label>
            <input placeholder='so'
                   min='0'
                   className='workout-form-input' type='number'/>
          </div>
          <div className='workout-input-group'>
            <label>Weight</label>
            <input placeholder='weak'
                   min='0'
                   className='workout-form-input' type='number'/>
          </div>
          <div className='workout-input-group'>
            <label>Units</label>
            <select name='units' 
              className='workout-form-input workout-form-input-dropdown'>
              <option value='kg'>kg</option>
              <option value='lbs'>lbs</option>
            </select>
          </div>
          <br/><br/>
          <button className='button button-red transition'>
            Remove Exercise
          </button>
        </form>
      </li>
    );
  }
});

module.exports = WorkoutFormExerciseIndexItem;