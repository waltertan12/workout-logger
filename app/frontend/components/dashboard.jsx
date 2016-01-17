const React = require('react');

var Dashboard = React.createClass({
  render: () => {
    return (
      <div className='landing-page'>
        <div className='intro'>
          <h1>You&#39;re weak, bro...</h1>
        </div>
        <div className='enter'>
          <h1>Get Strong</h1>
          <div className='center'>
            <button className='btn btn-default'>Login</button>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = Dashboard;