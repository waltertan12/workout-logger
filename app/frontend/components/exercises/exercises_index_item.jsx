const React = require('react');

const ExercisesIndexItem = React.createClass({
  render: function () {
    return (
      <li className='exercises-index-item'>
        { this.props.exercise }
      </li>
    );
  }
});

module.exports = ExercisesIndexItem;