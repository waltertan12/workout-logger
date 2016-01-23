const React = require('react');

const Navbar = React.createClass({
  render: function () {
    return (
      <nav className='navbar navbar-custom navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href="/#/dashboard">
              <img src='/assets/favicon.png' alt="You're Weak, Bro..."
                   style={{transform: 'translateY(-5px)'}}/>
            </a>
          </div>
          <ul className='nav navbar-nav'>
            <li className=''><a href="/#/dashboard">Log</a></li>
            <li role='separator' className='divider'/>
            <li className=''><a href="/#/dashboard">History</a></li>
            <li className=''><a href="/#/dashboard">Friends</a></li>
            <li className=''><a href="/#/dashboard">Graphs</a></li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href="/#/dashboard">Settings</a></li>
            <li><a href="/#/dashboard">Logout</a></li>
          </ul>
        </div>
      </nav>
    );
  }
})

module.exports = Navbar;