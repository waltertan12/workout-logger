const React = require('react');
const Link = require('react-router').Link;
const Typing = require('../utils/typing');

var LandingPage = React.createClass({
  getInitialState: function () {
    return ({
      t: null
    });
  },
  inView: function (id) {
    var el = document.getElementById(id);
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  initAnimation: function () {
    if (this.inView('typing') && !this.state.t) {
      this.setState({
        t: new Typing('typing', ['...?', 'yolked.', 'fast.', 'strong.'])
      });
      this.state.t.typePhrases();
    }
  },
  componentDidMount: function () {
    document.addEventListener('scroll', this.initAnimation);
  },
  componentWillUnmount: function () {
    document.removeEventListener('scroll', this.initAnimation);
  },
  render: function () {
    return (
      <div className='landing-page'>
        <div className='intro'>
          <h1>You&#39;re weak, bro...</h1>
        </div>
        <div className='enter'>
          <h1>Get <span id='typing'>...</span></h1>
          <div className='center'>
            <Link to='/sign_in' className='button button-blue transition'>
              Sign In
            </Link>&nbsp;
            <a className='button button-blue transition'>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = LandingPage;