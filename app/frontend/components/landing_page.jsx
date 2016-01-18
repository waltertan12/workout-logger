const React = require('react');
const Link = require('react-router').Link;
const Typed = require('../utils/typed.js');

var LandingPage = React.createClass({
  componentDidMount: function () {
    var t = new Typed('typed', [
      'faster',
      'yolked',
      'strengther',
      'ripped',
      'a chicken wing',
      'torn acls',
      'yoked',
      'strong'
    ]);

    t.typePhrases();
  },
  render: function () {
    return (
      <div className='landing-page'>
        <div className='intro'>
          <h1>You&#39;re weak, bro...</h1>
        </div>
        <div className='enter'>
          <h1>Get <span id='typed'>Strong</span></h1>
          <div className='center'>
            <Link to='/sign_in' className='btn btn-default'>Sign In</Link>
            <a className='btn btn-default'>Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = LandingPage;