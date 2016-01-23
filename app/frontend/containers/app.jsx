const React = require('react');
const EnterModal = require('../components/modals/enter_modal');
const Navbar = require('../components/navbar');
const Store = require('../stores/redux_store');

var App = React.createClass({
  render: function () {
    var navbar = Store.getState().getIn(['CURRENT_USER', 'id']);
    if (window.location.hash[2] !== '?') navbar = <Navbar />

    return (
      <div>
        { navbar }
        { this.props.children }
      </div>
    );
  }
})

module.exports = App;