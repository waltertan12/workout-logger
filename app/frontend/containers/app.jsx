const React = require('react');
const EnterModal = require('../components/enter_modal');

var App = React.createClass({
  render: function () {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
})

module.exports = App;