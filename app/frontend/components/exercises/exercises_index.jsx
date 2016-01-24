const React = require('react');
const ExercisesIndexItem = require('./exercises_index_item');

const ExercisesIndex = React.createClass({
  render: function () {
    var exercises = this.props.exercises.map((e, idx) => {
      return <ExercisesIndexItem exercise={e} key={idx} />;
    });

    return (
      <div className='col-md-4 exercise-pane'>
        <h3>Exercises</h3>
        <div className='exercises-search-group'>
          <input type='text' placeholder='Search for an exercise' 
                 className='exercise-search'/>
          <span className='input-group-btn'>
            <button className='button button-blue transition' >
              <span className='glyphicon glyphicon-search'/>
            </button>
          </span>
        </div>
        <ul className='exercises-index'>
          { exercises }
        </ul>
      </div>
    );
  }
});

module.exports = ExercisesIndex;