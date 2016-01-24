const React = require('react');

const WorkoutFormExerciseIndexItem = React.createClass({
  render: function () {
    var exercise = this.props.exercise;
    return (
      <li className='workout-form-exercise-index-item'>
        <form>
          <h4>{ exercise.toUpperCase() }</h4>
          <div className='workout-input-group'>
            <label>Reps</label>
            <input placeholder='5' 
                   className='workout-form-input' type='number'/>
          </div>
          <div className='workout-input-group'>
            <label>Weight</label>
            <input placeholder='405' 
                   className='workout-form-input' type='number'/>
          </div>
          <div className='workout-input-group'>
            <label>Units</label>
            <select name='units' className='workout-form-input' 
                    style={{width: 'auto', backgroundColor: 'white'}}>
              <option value='kg'>kg</option>
              <option value='lbs'>lbs</option>
            </select>
          </div>
        </form>
      </li>
    );
  }
});

module.exports = WorkoutFormExerciseIndexItem;