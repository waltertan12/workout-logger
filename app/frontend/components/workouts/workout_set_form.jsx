const React = require('react');

const WorkoutSetForm = React.createClass({
  render: function () {
    var exercise = this.props.exercise,
        set = this.props.set;
    return (
      <form>
        <div className='workout-set'>
          <label>Set #</label>
          <div className=''>{ set }</div>
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
        <div className='workout-input-group' style={{paddingLeft: '15px'}}>
          <button className='button button-green transition workout-set'>
            Copy&nbsp;
          </button>
        </div>
        <div className='workout-input-group' style={{paddingLeft: '15px'}}>
          <button className='button button-orange transition workout-set'>
            Delete&nbsp;
          </button>
        </div>
        <br/><br/>
      </form>
    );
  }
});

module.exports = WorkoutSetForm;