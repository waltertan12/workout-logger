const React = require('react');

const Navbar = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-custom navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href="/#/">You're Weak Bro</a>
          </div>
          <ul className='nav navbar-nav'>
            <li className=''><a href="/#/dashboard">Log</a></li>
            <li role='separator' className='divider'/>
            <li className=''><a href="/#/dashboard">History</a></li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href="/#/dashboard">Hi, User</a></li>
          </ul>
        </div>
      </nav>
    );
  }
})

module.exports = Navbar;