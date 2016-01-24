const React = require('react');

const WorkoutNotes = React.createClass({
  render: function () {
    return (
      <div className='notes-container'>
        <h3>Notes</h3>
        <textarea className='notes-input' 
                  placeholder='Add notes about how weak you are e.g. "Mashed potatoes... Upper back rounding on heavy cleans." or "Almost pooped pants during deadlift"'
                  rows='5' cols='50'>
        </textarea>
      </div>
    );
  }
})

module.exports = WorkoutNotes;
