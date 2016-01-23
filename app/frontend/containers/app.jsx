const React = require('react');
const EnterModal = require('../components/modals/enter_modal');
const Navbar = require('../components/navbar');

var App = React.createClass({
  render: function () {
    var navbar;
    if (true) navbar = <Navbar />

    return (
      <div>
        { navbar }
        { this.props.children }
      </div>
    );
  }
})

module.exports = App;